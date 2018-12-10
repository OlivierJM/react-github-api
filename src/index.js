import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      {
        user(login: "olivierjm") {
          repositoriesContributedTo(last: 5) {
            totalCount
            nodes {
              name
            }
          }
          repositories(first: 50, orderBy: { field: STARGAZERS, direction: DESC }) {
            totalCount
            nodes {
              name
              url
              description
              isFork
              stargazers(last: 5) {
                nodes {
                  name
                }
                totalCount
              }
            }
          }
        }
      }

    `
  })
  .then(result => console.log(result));

ReactDOM.render(<App client={client}/>, document.getElementById('root'));
serviceWorker.unregister();

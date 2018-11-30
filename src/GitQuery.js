import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { Query } from 'react-apollo'

const GET_REPOS = gql`
  {
    user(login: "alfeyo") {
      repositoriesContributedTo(last: 5) {
        totalCount
        nodes {
          name
        }
      }
      repositories(last: 10) {
        totalCount
        nodes {
          name
          url
          description
          stargazers(last: 5) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const Repos = () => (
    <Query query={GET_REPOS} fetchPolicy="network-only">
    {({ client, loading, data }) => {
      if (loading) {
        return <p className="navbar-text navbar-right">Loading...</p>;
      }
      if (!loading) {
        return (
            <ul>
              {data.user.repositories.nodes.map((repo, i) => (
                <li key={i}>{repo.name}</li>
              ))}
            </ul>
        );
      }
    }}
  </Query>

  );

import React from 'react'
import gql from "graphql-tag";
// import { useQuery } from "react-apollo-hooks";
import { Query } from 'react-apollo'

const GET_REPOS = gql`
  {
    user(login: "makayi") {
      repositoriesContributedTo(last: 5) {
        totalCount
        nodes {
          name
        }
      }
      repositories(last: 20) {
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
    {({ loading, data }) => {
      if (loading) {
        return <p className="navbar-text navbar-right">Loading...</p>;
      }
      if (!loading) {
        return (
            <ol>
              {data.user.repositories.nodes.map((repo, i) => (
                <li key={i}>{repo.name}</li>
              ))}
            </ol>
        );
      }
    }}
  </Query>
);

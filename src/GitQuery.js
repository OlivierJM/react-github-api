import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_REPOS = gql`
  query GETREPOS($login: String!) {
    user(login: $login) {
      repositoriesContributedTo(last: 5) {
        totalCount
        nodes {
          name
        }
      }
      repositories(last: 50) {
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

export const Repos = ({ login }) => (
  <Query query={GET_REPOS} variables={{ login }} fetchPolicy={"network-only"}>
    {
      ({ loading, data }) =>
      (!loading && data && (
        <ol>
          {data.user.repositories.nodes.map((repo, i) => (
            <li key={i}>{repo.name}</li>
          ))}
        </ol>
      )) || <p>Loading...</p>
    }
  </Query>
);

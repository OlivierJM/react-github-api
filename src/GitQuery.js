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
            <div key={i} className="card" style={{width: '20em'}}>
            <div className="card-body">
              <h4 className="card-title">{repo.name}</h4>
              <h5 className="card-subtitle">Nice looking subtitle.</h5>
              <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
              <a className="card-link" href={repo.url}>First link</a>
            </div>
            </div>

          ))}
        </ol>
      )) || <p>Loading...</p>
    }
  </Query>
);

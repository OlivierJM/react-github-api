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
            totalCount
          }
        }
      }
    }
  }
`;

export const Repos = ({ login }) => (
  <Query query={GET_REPOS} variables={{ login }} fetchPolicy={"network-only"}>
    {({ loading, data }) =>
      (!loading &&
        data &&
        data.user.repositories.nodes.map((repo, i) => (
          <div className="col-4 col">
          <div key={i} className="card" style={{ width: "20em" }}>
            <div className="card-body">
              <h4 className="card-title">{repo.name}</h4>
              <h5 className="card-subtitle">{repo.stargazers.totalCount}</h5>
              <p className="card-text">{repo.description}</p>
              <a className="card-link" href={repo.url}>
                Github Link
              </a>
            </div>
          </div>
        </div>
        ))) || <div className='row flex-center'><p className='flex-center'>Loading...</p></div>
    }
  </Query>
)

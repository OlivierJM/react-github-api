import React, { Fragment } from "react"
import { Query } from "react-apollo"
import { GET_REPOS } from "../queries/RepoQuery"
import PlaceHolder from "./PlaceHolder"
import Profile from "./Profile"

export const Repos = ({ login }) => (
  <Query query={GET_REPOS} variables={{ login }} fetchPolicy={"network-only"}>
    {({ loading, data }) =>
      !loading && data ? (
        <Fragment>
          <div className="row">
            <Profile
              image={data.user.avatarUrl}
              name={data.user.name}
              orgs={data.user.organizations.totalCount}
              location={data.user.location}
            />
          </div>
          <div className="row">
            {data.user.repositories.nodes.map((repo, i) => (
              <div className="sm-12 md-4 col" key={i}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{repo.name}</h4>
                    <h5 className="card-subtitle">
                      <span role="img" aria-label="stars">
                        ⭐
                      </span>{" "}
                      {repo.stargazers.totalCount}
                    </h5>
                    <h5 className="card-subtitle">{repo.isFork && "Forked"}</h5>
                    <p className="card-text">{repo.description}</p>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={repo.url}
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      ) : !login.length ? (
        <PlaceHolder />
      ) : (
        <div className="row flex-center">
          <p className="flex-center">Loading ....</p>
        </div>
      )
    }
  </Query>
)

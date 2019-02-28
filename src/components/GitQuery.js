import React, { Fragment } from "react"
import { useQuery } from "react-apollo-hooks"
import { GET_REPOS } from "../queries/RepoQuery"
import PlaceHolder from "./PlaceHolder.tsx"
import Profile from "./Profile"

export function Repos({ login }) {
  const { data, error } = useQuery(GET_REPOS, {
    variables: { login },
  })
  if (error) return <PlaceHolder />
  console.log(data)
  return (
    <Fragment>
      <div className="row">
        <Profile
          totalCount={data.user.repositories.totalCount}
          name={data.user.name}
          orgs={data.user.organizations.totalCount}
          location={
            data.user.contributionsCollection.contributionCalendar
              .totalContributions
          }
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
  )
}

import * as React from "react"
import { useQuery } from "react-apollo-hooks"
import { GET_REPOS } from "../queries/RepoQuery"
import PlaceHolder from "./PlaceHolder"
import Profile from "./Profile"

interface repoProps {
  login: string
}

interface repo {
  name: string
  stargazers: stargazers
  isFork: boolean
  description: string
  url: string
}
interface stargazers {
  totalCount: number
}

const Repos: React.SFC<repoProps> = ({ login }) => {
  const { data, error, loading } = useQuery(GET_REPOS, {
    variables: { login },
    suspend: true,
  })
  // fix the returned component to be different
  if (loading) {
    return <PlaceHolder />
  }
  // The query will originally contain errors because of the initial empty string we are passing 🙈
  if (error) {
    return <PlaceHolder />
  }
  return (
    <React.Fragment>
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
        {data.user.repositories.nodes.map((repo: repo, i: number) => (
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
    </React.Fragment>
  )
}

export { Repos }

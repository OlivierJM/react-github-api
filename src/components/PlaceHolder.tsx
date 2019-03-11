import * as React from "react"
import "./styles/placeholder.css"

function PlaceHolder() {
  return (
    <div className="placeholder">
      <div className="">
        <div className="repo-title">
          <h1>Repo Query</h1>
          <h3>The Easiest way to query a github user's repositories</h3>
          <h5>Type the github username in the box above to see the repos</h5>
        </div>
      </div>

      <div className="links">
        <a
          className="link"
          href="https://github.com/OlivierJM/react-github-api"
        >
          Fork it here
        </a>
        <a
          className="link"
          href="https://github.com/OlivierJM/react-github-api/issues"
        >
          Issues
        </a>
        <a className="link" href="https://github.com/OlivierJM">
          More from me
        </a>
      </div>

      <h4 className="text-center">Contributors</h4>
      <p className="text-center">The list of contributors is coming soon ...</p>
    </div>
  )
}
export default PlaceHolder

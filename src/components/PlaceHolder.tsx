import * as React from "react"

function PlaceHolder() {
  return (
    <div className="container">
      <div className="row flex-center">
        <div className="text-center">
          <h1>Repo Query</h1>
          <h3>The Easiest way to query a github user's repositories</h3>
          <h5>Type the github username in the box above to see the repos</h5>
        </div>
      </div>
      <div className="row flex-center">
        <a
          className="paper-btn margin"
          href="https://github.com/OlivierJM/react-github-api"
        >
          Fork it here
        </a>
        <a
          className="paper-btn margin"
          href="https://github.com/OlivierJM/react-github-api/issues"
        >
          Issues
        </a>
        <a className="paper-btn margin" href="https://github.com/OlivierJM">
          More from me
        </a>
        {/* <img width='' src='https://travis-ci.com/OlivierJM/react-github-api.svg?branch=master' alt='travis build status'/> */}
      </div>
      <h4 className="text-center">Contributors</h4>
      <p className="text-center">The list of contributors is coming soon ...</p>
    </div>
  )
}
export default PlaceHolder

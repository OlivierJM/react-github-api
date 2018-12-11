import React, { Fragment } from "react"

function PlaceHolder() {
  return (
    <Fragment>
      <div className="row flex-center">
        <div className="text-center">
          <h1>Repo Query</h1>
          <h3>The Easiest to Query user's repositories</h3>
        </div>
      </div>

      <div className="row flex-center child-borders">
        <a className="paper-btn margin" href="https://github.com/OlivierJM/react-github-api">
          Fork it here
        </a>
        <a className="paper-btn margin" href="/docs/">
          Documentation
        </a>
        <a className="paper-btn margin" href="/about/">
          About
        </a>

        <a
          href="https://github.com/rhyneav/papercss"
          target="_blank"
          className="paper-btn margin"
        >
          Github
        </a>
      </div>
    </Fragment>
  )
}
export default PlaceHolder

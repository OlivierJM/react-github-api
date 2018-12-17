// this file will be a holder for user's profile info as indicated in the issues
import React, { Fragment } from "react"

// location
// name
// organizations
// location

const Profile = props => (
  <Fragment>
    <h2>{props.name}</h2>
    <img src={props.image} alt="github avatar" />
  </Fragment>
)

export default Profile

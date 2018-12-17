// this file will be a holder for user's profile info as indicated in the issues
import React from "react"

const Profile = props => (
  <div>
    <h2>{props.name}</h2>
    <p>
      Organizations: {props.orgs} <br />
      Location: {props.location} <br />
      Number of Repos: {props.totalCount}
    </p>
    {/* <img src={props.image} alt="github avatar" /> */}
  </div>
)

export default Profile

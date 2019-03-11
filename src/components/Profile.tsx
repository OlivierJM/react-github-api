// this file will be a holder for user's profile info as indicated in the issues
import * as React from "react"

interface profileProps {
  name: string
  orgs: number
  location: string
  totalCount: number
}

const Profile: React.SFC<profileProps> = props => (
  <div className="profile">
    <h2>{props.name}</h2>
    <p>
      Organizations: {props.orgs} <br />
      Contributions: {props.location} <br />
      Number of Repos: {props.totalCount}
    </p>
  </div>
)

export default Profile

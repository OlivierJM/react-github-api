import React from "react"
import { Repos } from "./GitQuery"
import _ from "lodash"

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "" // initial query
    }
    this.delayedCallback = _.debounce(this.updateQuery, 1000)
  }

  updateQuery = ({target: { value }}) => {
    this.setState({ query: value })
  }

  onChange = e => {
    e.persist()
    this.delayedCallback(e)
  }

  render() {
    const { query } = this.state
    return (
      <div>
        <input onChange={this.onChange} placeholder='type a username' type='text' />
        <Repos login={query}/>
      </div>
    )
  }
}

export default Repositories

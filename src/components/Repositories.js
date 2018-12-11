import React, { Fragment } from "react"
import { Repos } from "./GitQuery"
import _ from "lodash"

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "", // initial query
    }
    this.delayedCallback = _.debounce(this.updateQuery, 1000)
  }

  updateQuery = ({target: { value }}) => {
    this.setState({ query: value })
  }

  onChange = e => {
    e.persist() // because of the event pooling with react synthetic events, this has to be persisted
    this.delayedCallback(e)
  }

  render() {
    const { query } = this.state
    return (
      <Fragment>
          <div className='row flex-center'>
              <div className="form-group">
                  <input maxLength={39} onChange={this.onChange} placeholder='type a username' type='text' />
              </div>
            </div>
        <div className='row'>
            <Repos login={query} /> 
        </div>
      </Fragment>
    )
  }
}

export default Repositories

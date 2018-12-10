import React from "react"
import { Repos } from "./GitQuery"
import _ from "lodash"

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "", // initial query
      repos: 10, // default number of repos it will show
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

  handleSelect = e => {
    this.setState({ repos: e.target.value })
  }
  render() {
    const { query, repos } = this.state
    return (
      <div>
          <div className='row flex-center'>
            <div className="form-group">
                <input onChange={this.onChange} placeholder='type a username' type='text' />
                <label htmlFor="paperSelects1">Number of Repos</label>
                <select id="paperSelects1" onChange={this.handleSelect}>
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
            </div>
            </div>
        <div className='row'>
            <Repos login={query} repos={repos}/> 
        </div>
      </div>
    )
  }
}

export default Repositories

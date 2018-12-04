import React, { useState } from "react";
import { Repos } from "./GitQuery";
import _ from "lodash";

// function Repositories(){
//     const [username, setName] = useState('olivierjm')
//     // const [debounce, setDebounce] = useState('')
//     const delayedCallback = _.debounce(handleNameChange, 1000)

//     function handleNameChange({target:{ value }}){
//         setName(value)
//     }
//     function onChange(event) {
//         //This will ensure that the event is not pooled
//         event.persist()
//         delayedCallback(event)
//       }
//     return(
//         <div>
//             <input value={username} type='text' onChange={onChange} />
//             <Repos login={username}/>
//         </div>
//     )
// }

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "olivierjm"
    }
    this.delayedCallback = _.debounce(this.updateQuery, 1000)
  }

  updateQuery(event) {
    const { value } = event.target
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
        <input onChange={this.onChange} />
        <Repos login={query}/>
      </div>
    )
  }
}

export default Repositories

import React, { Fragment, useEffect, useState } from "react"
import { Repos } from "./GitQuery"

function Repositories() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 1000)

  function handleQueryChange({ target: { value } }) {
    setQuery(value)
  }
  return (
    <Fragment>
      <div className="row flex-center">
        <div className="form-group">
          <input
            maxLength={39}
            onChange={handleQueryChange}
            placeholder="type a github username"
            type="text"
            style={{ width: 200 }}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <Repos login={debouncedQuery} />
      </div>
    </Fragment>
  )
}

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebounced(value);
      }, delay);
      return () => clearTimeout(handler);
    },
    [value, delay]
    )
    return debounced
  }
  
  export default Repositories
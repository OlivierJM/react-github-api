import React, { Fragment, useState, useEffect, useRef } from "react"
import { Repos } from "./GitQuery"
import { useDebounce } from "../utils/hooks"

function Repositories() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 1000)
  let inputRef = useRef<HTMLElement | null>(null)

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  })
  return (
    <Fragment>
      <div
        className="row flex-center"
        style={{ marginTop: query.length ? 0 : "10%" }}
      >
        <div className="form-group">
          <input
            ref={() => inputRef}
            maxLength={39}
            onChange={handleQueryChange}
            placeholder="type a github username"
            type="text"
            style={{ width: 200 }}
          />
        </div>
      </div>
      <div className="row">
        <Repos login={debouncedQuery} />
      </div>
    </Fragment>
  )
}
export default Repositories

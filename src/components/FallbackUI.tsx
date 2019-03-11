import * as React from "react"
import "./styles/fallbackui.css"

// this can be made better
function FallBackUI() {
  return (
    <p
      style={{ marginTop: "20%", textAlign: "center", fontSize: "3.5em" }}
      className="flex-center"
    >
      Loading...
    </p>
  )
}
export default FallBackUI

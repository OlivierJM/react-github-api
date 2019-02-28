import * as React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import App from "./App"
import client from "./config"

ReactDOM.render(<App client={client} />, document.getElementById("root"))
serviceWorker.unregister()

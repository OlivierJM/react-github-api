import React, { Suspense } from "react"
import { ApolloProvider } from "react-apollo"
import FallBackUI from "./components/FallbackUI"
import "./App.css"

const Repos = React.lazy(() => import("./components/Repositories"))

function App({client}) {
  return (
    <Suspense fallback={<FallBackUI />}>
      <ApolloProvider client={client}>
        <div className="App">
          <Repos />
        </div>
      </ApolloProvider>
    </Suspense>
  )
}

export default App

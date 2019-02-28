import React, { Suspense } from "react"
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloProviderHooked } from "react-apollo-hooks"
import FallBackUI from "./components/FallbackUI.tsx"

const Repos = React.lazy(() => import("./components/Repositories.tsx"))

function App({ client }) {
  return (
    <ApolloProvider client={client}>
      <ApolloProviderHooked client={client}>
        <Suspense fallback={<FallBackUI />}>
          <div className="App">
            <Repos />
          </div>
        </Suspense>
      </ApolloProviderHooked>
    </ApolloProvider>
  )
}

export default App

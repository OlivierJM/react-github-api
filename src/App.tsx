import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloProviderHooked } from "react-apollo-hooks"
import FallBackUI from "./components/FallbackUI"

interface clientProps {
  client: any
}

const Repos = React.lazy(() => import("./components/Repositories"))

const App: React.SFC<clientProps> = ({ client }) => (
  <ApolloProvider client={client}>
    <ApolloProviderHooked client={client}>
      <React.Suspense fallback={<FallBackUI />}>
        <div className="App">
          <Repos />
        </div>
      </React.Suspense>
    </ApolloProviderHooked>
  </ApolloProvider>
)
export default App

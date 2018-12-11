import React, { Component, Suspense } from 'react';
import { ApolloProvider } from 'react-apollo'
import './App.css';
import FallBackUI from './components/FallbackUI'

const Repos = React.lazy(() => import('./components/Repositories'))
// import Repositories from './components/Repositories'

class App extends Component {
  render() {
    return (
      <Suspense fallback={<FallBackUI />}>
        <ApolloProvider client={this.props.client}>
          <div className="App">
              <Repos />
          </div>
        </ApolloProvider>
      </Suspense>
    );
  }
}

export default App;

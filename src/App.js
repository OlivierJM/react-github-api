import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import './App.css';
import Repositories from './Repositories'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
      <div className="App">
          <Repositories />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;

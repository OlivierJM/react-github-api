import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import logo from './logo.svg';
import './App.css';
import Repositories from './Repositories'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={this.props.client}>
      <div className="App">
        <header className="App-header">
          <Repositories />
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;

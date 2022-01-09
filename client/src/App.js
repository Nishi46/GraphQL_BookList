import React, { Component } from 'react';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';
//import logo from './logo.svg';
//import './App.css';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

//apollo client setup
const client = new ApolloClient({
  uri:"http://localhost:4000/graphql",
  cache: new InMemoryCache()
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Nishi's Book List</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

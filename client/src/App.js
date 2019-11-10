import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook'
//apolloclient setup 
const client = new ApolloClient({
          uri : 'http://localhost:4000/graphql'
}) 

class App extends React.Component{
  render(){
    return(
      <ApolloProvider client = { client }>
        <div id = "main">
          <h1>GraphQL Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App;

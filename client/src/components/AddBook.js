import React, { Component } from 'react';
//import {gql} from '@apollo/client';
import {flowRight as compose} from 'lodash';
import {graphql} from '@apollo/client/react/hoc';
//import logo from './logo.svg';
//import './App.css'; addBookMutation
import {getAuthorsQuery,getBooksQuery,addBookMutation} from '../queries/queries';


class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      genre:'',
      status:'',
      authorId:''
    }
  }
  displayAuthors(){
    var data = this.props.getAuthorsQuery;
    //console.log(this.props);
    if(data.loading){
      return (<option disabled>Loading Authors..</option>);}
      else {
        return data.authors.map(author=> {
        return (<option key = {author.id} value={author.id}>{author.name}</option>);
      })
    }
  }
  submitForm(e){
    e.preventDefault();
    this.props.addBookMutation({
      variables:{
        name: this.state.name,
        genre:this.state.genre,
        status:this.state.status,
        authorId:this.state.authorId
      },
      refetchQueries:[{query: getBooksQuery}]
    });
    //console.log(this.state);
  }
  render(){
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>

        <div className = "field">
          <label>Book Name:</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
        </div>

        <div className = "field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => this.setState({genre: e.target.value})}/>
        </div>

        <div className = "field">
          <label>Status:</label>
          <select onChange={(e) => this.setState({status: e.target.value})}>
          <option value="Select status">Select status</option>
          <option value="Reading">Reading</option>
          <option value="Want to Read">Want to Read</option>
          <option value="Have Read">Have Read</option>
          <option value="Not Read">Not Read</option>
          </select>
        </div>

        <div className = "field">
          <label>Author:</label>
          <select onChange={(e) => this.setState({authorId: e.target.value})}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>

   );
}
}

export default compose (
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation,{name:"addBookMutation"}),
  //graphql(getAuthorsQuery,{name:"getAuthorsQuery"})
)(AddBook);

import {gql} from '@apollo/client';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const addBookMutation = gql`
  mutation($name:String!, $genre:String!,$status:String!,$authorId:ID!){
    addBook(name:$name,genre:$genre,status:$status,authorId:$authorId){
        name
        id
    }
  }
`;

const getBookQuery = gql`
  query($id:ID){
    book(id:$id){
      id
      name
      genre
      status
      author{
        id
        name
        books{
          name
          id
        }
      }
    }
  }
`

export {getBooksQuery,getAuthorsQuery,addBookMutation,getBookQuery};

import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVED_BOOK = gql`
  mutation savedBook(
    $bookId: String!
    $title: String!
    $description: String!
    $authors: [String]
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      title: $title
      description: $description
      authors: $authors
      image: $image
      link: $link
    ) {
      _id
      username
      email
      savedBooks {
        _id
        bookId
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      _id
      username
      savedBooks {
        title
      }
    }
  }
`;

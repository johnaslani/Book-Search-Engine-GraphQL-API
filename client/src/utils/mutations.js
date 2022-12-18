import { gql } from "@apollo/client";

export const CREATE_SAVED = gql`
  mutation createSaved($book1: String!, $book2: String!) {
    createMatchup(book1: $book1, book2: $book2) {
      _id
      book1
      book2
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($_id: String!, $bookNum: Int!) {
    createComment(_id: $_id, bookNum: $bookNum) {
      _id
      book1
      book2
      book1_comments
      book2_comments
    }
  }
`;

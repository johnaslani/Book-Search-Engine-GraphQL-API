import { gql } from '@apollo/client';

export const QUERY_BOOK = gql`
  query book {
    book {
      _id
      name
    }
  }
`;

export const QUERY_SAVEDS = gql`
  query saveds($_id: String) {
    saveds(_id: $_id) {
      _id
      book1
      book2
      book1_comments
      book2_comments
    }
  }
`;

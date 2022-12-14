const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Query {
    user: User
  }

  type Mutation {
    # createSaved(book1: String!, book2: String!): Saved
    # createComment(_id: String!, bookNum: Int!): Saved
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(bookId: String!): User
    saveBook(
      bookId: String!
      title: String!
      description: String!
      authors: [String]
      image: String
      link: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

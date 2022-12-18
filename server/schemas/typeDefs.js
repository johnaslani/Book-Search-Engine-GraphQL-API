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
    user(id: ID!): User
  }

  type Mutation {
    # createSaved(book1: String!, book2: String!): Saved
    # createComment(_id: String!, bookNum: Int!): Saved
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(id: ID!): User
    saveBook(
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
    ): User
    login(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// import user model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

// const { Book, Saved, User } = require("../models");
const {
  deleteBook,
  saveBook,
} = require("../../../Book-Search-Engine-RESTful-API/server/controllers/user-controller");

const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async () => {
      // return Book.find({});
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    deleteBook: async (parent, args, context) => {
      if (!context.user)
        throw new AuthenticationError("You need to be logged in!");

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: args.id } },
        { new: true, runValidators: true }
      );
      return user;
    },

    saveBook: async (parent, args, context) => {
      if (!context.user)
        throw new AuthenticationError("You need to be logged in!");

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: args } },
        { new: true, runValidators: true }
      );
      return user;
    },
    login: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });
      if (!user) throw new AuthenticationError("Invalide credentials!");
      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) throw new AuthenticationError("Invalide credentials!");

      const token = signToken(user);
      return { token, user };
    },

    createSaved: async (parent, args) => {
      const saved = await Saved.create(args);
      return saved;
    },
    createComment: async (parent, { _id, bookNum }) => {
      const comment = await Saved.findOneAndUpdate(
        { _id },
        { $inc: { [`book${bookNum}_comments`]: 1 } },
        { new: true }
      );
      return comment;
    },
  },
};

module.exports = resolvers;

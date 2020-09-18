const { ApolloServer } = require("apollo-server");
const typeDefs = require("./types");
const resolvers = require("./resolvers");

const {
  MlAPI,
} = require("./dataSources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ mlAPI: new MlAPI() }),
});

server
  .listen()
  .then(({ url }) =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );

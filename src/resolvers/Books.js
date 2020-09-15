module.exports = {
  Query: {
    books: async (_, __, { dataSources }) => {
      const response = await dataSources.mlAPI.getUserPlanOffers();

      return response.books;
    },
  },
};

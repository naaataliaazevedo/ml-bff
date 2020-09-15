module.exports = {
  Query: {
    search: async (_, __, { dataSources }) => {
      const response = await dataSources.mlAPI.getProductSearch();
      console.log(response);
      return response;
    }
  },
};

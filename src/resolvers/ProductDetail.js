module.exports = {
  Query: {
    product: async (_, { input }, { dataSources }) => {
      const product = await dataSources.mlAPI.getProductDetails(input);

      return product;
    },
  },
};

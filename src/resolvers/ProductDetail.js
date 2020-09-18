module.exports = {
  Query: {
    product: async (_, { input }, { dataSources }) => {
      const product = await dataSources.mlAPI.getProductDetails(input);

      const author = {
        name: 'Natália',
        lastName: 'Azevedo'
      };

      const formattedData = { ...product, author }

      return formattedData
    },
  },
};

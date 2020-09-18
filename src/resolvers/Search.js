module.exports = {
  Query: {
    search: async (_, { input }, { dataSources }) => {
      const productList = await dataSources.mlAPI.getProductSearch(input);

      const author = {
        name: 'Natália',
        lastName: 'Azevedo'
      };

      const formattedData = [productList, author]

      return formattedData[0].results
    },
  },
};

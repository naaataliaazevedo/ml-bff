module.exports = {
  Query: {
    search: async (_, { input }, { dataSources }) => {
      const productList = await dataSources.mlAPI.getProductSearch(input);
      // console.log('category list', productList.available_filters);
      console.log(productList);
      // console.log('input', input)
      const getResults = productList.results;
      // console.log(getResults.map((item) => item.address));

      return getResults;
    },
  },
};

const books = [{id: 2}, {id: 3}]


module.exports = {
  Query: {
    search: async (_, { input }, { dataSources }) => {
      const productList = await dataSources.mlAPI.getProductSearch(input);
      // console.log('category list', productList.available_filters);
      // console.log(productList.results[2]);
      // console.log('input', input)
      const getResults = productList.results;

      return getResults;
    },
  },
};

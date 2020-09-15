const books = [{id: 2}, {id: 3}]


module.exports = {
  Query: {
    search: async (_, __, { dataSources }) => {
      const productList = await dataSources.mlAPI.getProductSearch();
      // console.log('category list', productList.available_filters);
      // console.log(productList.results[2]);

      const getResults = productList.results;

      return getResults;
    },
  },
};

module.exports = {
  Query: {
    product: async (_, { input }, { dataSources }) => {
      const product = await dataSources.mlAPI.getProductDetails(input);

      return product;
    },
  },
  // description: async (_, { input }, { dataSources }) => {
  //   const description = await dataSources.mlAPI.getProductDetailsDescription(input);

  //   console.log(description);

  //   return description.plan_text;
  // },
};

module.exports = {
  Query: {
    product: async (_, { input }, { dataSources }) => {
      const product = await dataSources.mlAPI.getProductDetails(input)
      const description = await dataSources.mlAPI.getProductDetailsDescription(
        input
      )

      const author = {
        name: 'Natália',
        lastName: 'Azevedo'
      }

      const formattedData = { ...product, description, author };

      return formattedData
    },
  }
}

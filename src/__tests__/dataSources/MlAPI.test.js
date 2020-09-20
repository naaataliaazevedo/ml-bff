const MlAPI = require('../../dataSources/MlAPI');

const { ML_API_URL } = require('../../config');

describe('', () => {
  const mlAPI = new MlAPI()

  test('Should call getProductSearch with params', async () => {
    mlAPI.get = jest.fn()

    const query = 'Apple'

    await mlAPI.getProductSearch({ query })
    expect(mlAPI.get).toHaveBeenCalledWith(
      `${ML_API_URL}/sites/MLA/search?q=:${query}`
    )
  })

  test('Should call getProductDetails with params', async () => {
    mlAPI.get = jest.fn()

    const id = 'MLA651109954'

    await mlAPI.getProductDetails({ id })
    expect(mlAPI.get).toHaveBeenCalledWith(`${ML_API_URL}/items/${id}`)
  })

  test('Should call getProductDetails with params', async () => {
    mlAPI.get = jest.fn()

    const id = 'MLA651109954'

    await mlAPI.getProductDetailsDescription({ id })
    expect(mlAPI.get).toHaveBeenCalledWith(
      `${ML_API_URL}/items/${id}/description`
    )
  })
})

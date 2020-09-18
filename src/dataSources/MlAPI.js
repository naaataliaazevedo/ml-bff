const { RESTDataSource } = require("apollo-datasource-rest");

const { ML_API_URL } = require("../config");

class MlAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ML_API_URL;
  }

  async getProductSearch({ query }) {
    return this.get(`${ML_API_URL}/sites/MLA/search?q=:${query}`);
  }

  async getProductDetails({ id }) {
    return this.get(`${ML_API_URL}/items/${id}`);
  }

  async getProductDetailsDescription({ id }) {
    return this.get(`${ML_API_URL}/items/${id}/description`)
  }
}

module.exports = MlAPI;

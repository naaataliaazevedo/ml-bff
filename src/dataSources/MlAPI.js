const { RESTDataSource } = require("apollo-datasource-rest");

const { ML_API_URL } = require("../config");

const mockedResponse = {
  books: [
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
    },
    {
      title: "Jurassic Park",
      author: "Michael Crichton",
    },
  ],
};

class MlAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ML_API_URL;
  }

  getUserPlanOffers() {
    return mockedResponse;
  }

  async getProductSearch() {
    return this.get(`${ML_API_URL}/sites/MLA/search?q=:query`);
    // return this.get()`${ML_API_URL}/sites/MLA/search?q=:${query}`);
  }
}

module.exports = MlAPI;

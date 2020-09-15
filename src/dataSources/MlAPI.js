const { RESTDataSource } = require("apollo-datasource-rest");

const { SORTING_HAT_URL } = require("../config");

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
    // this.baseURL = SORTING_HAT_URL;
  }

  getUserPlanOffers() {
    return mockedResponse;
  }
}

module.exports = MlAPI;

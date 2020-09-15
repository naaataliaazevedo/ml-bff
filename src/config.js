const productionEnvironment = {
  // NODE_ENV: process.env.NODE_ENV || "development",
  // PORT: process.env.PORT || 4000,
  SORTING_HAT_URL:
    process.env.SORTING_HAT_URL || "https://sorting-hat.us.stg.gympass.cloud",
};

module.exports = productionEnvironment;

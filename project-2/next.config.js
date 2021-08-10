const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "thalita",
        mongodb_password: "EGWyZYboKdEITTAU",
        mongodb_clustername: "sandbox",
        mongodb_database: "shepard-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "thalita",
      mongodb_password: "EGWyZYboKdEITTAU",
      mongodb_clustername: "sandbox",
      mongodb_database: "shepard-site",
    },
  };
};

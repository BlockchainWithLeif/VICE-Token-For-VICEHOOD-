let secret = require('./secret.json');
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: secret.url,
      accounts: [secret.key]
    }
  }
};

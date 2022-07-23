require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
      goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
      mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [process.env.PRIVATE_KEY]
      }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
};

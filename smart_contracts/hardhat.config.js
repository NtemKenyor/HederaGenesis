require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.18",
  networks: {
    hedera_testnet: {
      url: "https://testnet.hashio.io/api",  // ✅ Hedera Testnet JSON-RPC Relay
      chainId: 296,                          // ✅ Hedera Testnet chain ID
      accounts: process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [],
      timeout: 60000
    },

    hedera_mainnet: {
      url: "https://mainnet.hashio.io/api",  // ✅ Hedera Mainnet JSON-RPC Relay
      chainId: 295,                          // ✅ Hedera Mainnet chain ID
      accounts: process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [],
      timeout: 60000
    }
  }
};

const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC, // Chuỗi 12 từ của ví Metamask
        `https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID`
      ),
      network_id: 3,       // Ropsten ID
      gas: 5500000,       
      confirmations: 2,    
      timeoutBlocks: 200,  
      skipDryRun: true     
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",
    }
  }
};

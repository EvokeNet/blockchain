var Web3 = require('web3')

module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      //gas: 9000000 // Match any network id
    },
    development: {
      host: "138.91.120.224",
      port: 80,
      network_id: "*",
      gas: 9000000 // Match any network id
    },
    developmentAzure: {
      provider: () => {
        return new Web3.providers.HttpProvider('http://evk4mk-dns-reg1.eastus.cloudapp.azure.com:8545');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4712388
    },
    developmentOld: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://u0s936cp08-u0m0medsuq-rpc.us-east-2.kaleido.io', 0, 'u0etp2eajs', 'NJTD8hlMRDrAKkKJzgJf17pbxYrFVPINOvVLhhL5A9Q');
      },
      network_id: "*", // Match any network id
      gasPrice: 10000,
      gas: 4712388
    }
  }
};

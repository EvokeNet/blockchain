var Web3 = require('web3')

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    developmentOld: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://u0s936cp08-u0m0medsuq-rpc.us-east-2.kaleido.io', 0, 'u0etp2eajs', 'NJTD8hlMRDrAKkKJzgJf17pbxYrFVPINOvVLhhL5A9Q');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4712388
    }
  }
};

var Web3 = require('web3')

module.exports = {
  networks: {
    development: {
      provider: () => {
        return new Web3.provider.HttpProvider('https://u0s936cp08-u0m0medsuq-rpc.us-east-2.kaleido.io/',0,'u0etp2eajs','NJTD8hlMRDrAKkKJzgJf17pbxYrFVPINOvVLhhL5A9Q')
      },
      network_id: "*",
      gasPrice: 0,
      gas: 4500000      
    }
  }
};

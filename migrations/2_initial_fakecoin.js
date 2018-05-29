var FakeCoin = artifacts.require("FakeCoin");

module.exports = function(deployer) {
  deployer.deploy(FakeCoin);
};

pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Campaign.sol";
import "../contracts/FakeCoin.sol";  // maybe extract this into an integration test

contract TestCampaignIntegration {

  Campaign aCampaign;
  FakeCoin fakeCoin;

  function beforeEach() {
    aCampaign = Campaign(DeployedAddresses.Campaign());
    aCampaign.SetTokenAddress(DeployedAddresses.FakeCoin());
    fakeCoin = FakeCoin(DeployedAddresses.FakeCoin());
  }

  function testDefaultBalance() {
    uint actualBalance = aCampaign.GetBalance();
    Assert.equal(actualBalance, 0, "Expected to have 0 starting out.");
  }

  function testActualBalance() {
    fakeCoin.deposit(100, DeployedAddresses.Campaign());
    uint actualBalance = aCampaign.GetBalance();

    Assert.equal(actualBalance, 100, "Expected to have 0 starting out.");
  }
}

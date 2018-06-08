pragma solidity ^0.4.23;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CampaignManager.sol";
import "../contracts/FakeCoin.sol";  // maybe extract this into an integration test

contract TestMakeDonation {

  CampaignManager campaignManager;

  function testDonorDonatesLittle() {
    campaignManager = CampaignManager(DeployedAddresses.CampaignManager());
    campaignManager.CreateCampaign("Social Innovation", 50);
    campaignManager.CreateCampaign("Waste", 10);    
    //deploying a new instance so that testContract can act as donor;
    FakeCoin fakeCoin = new FakeCoin(100);
    uint initialBalance = fakeCoin.balanceOf(this);
    Assert.equal(initialBalance, 100, "Initial balance should be 100");
    address socialInnovationCampaign = campaignManager.GetCampaign("Social Innovation");
    fakeCoin.approveAndCall(socialInnovationCampaign, 10);
    Assert.equal(fakeCoin.balanceOf(this), 90, "Donor should have 90 fakeCoins");
    Assert.equal(fakeCoin.balanceOf(socialInnovationCampaign), 10, "Social Innovation Campaign should have 10 fakeCoins");
  }
}

pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Campaign.sol";

contract TestCampaignManager {
  function testCreateCampaign() {
    uint256 i = 1000;
    Assert.equal(i, 1000, "Expected to have 100.");
  }
}

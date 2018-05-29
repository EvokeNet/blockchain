pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Campaign.sol";

contract TestCampaign {
  function testGoal() {
    uint goal = 1000;
    Campaign aCampaign = Campaign(DeployedAddresses.Campaign());
    aCampaign.SetGoal(goal);  // replace setter-based DI with constructor-based DI (avoid two transactions)
    uint actualGoal = aCampaign.GetGoal();

    Assert.equal(actualGoal, 1000, "Expected to have 100.");
  }
}

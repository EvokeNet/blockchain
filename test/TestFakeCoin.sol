pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FakeCoin.sol";

contract TestFakeCoin {

  function testQueryABalance() {
    FakeCoin fakeCoin = new FakeCoin(100);
    uint actualBalance = fakeCoin.balanceOf(this);
    Assert.equal(actualBalance, 100, "Owner should have 100 FakeCoins initially");
  }
  
}

pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FakeCoin.sol";

contract TestFakeCoin {

  FakeCoin fakeCoin = FakeCoin(DeployedAddresses.FakeCoin());

  function testQueryABalance() {
    address ownerAddress = 0x021Fd1df3da6F3f1134374d18878d6999aFD03Ac;
    uint actualBalance = fakeCoin.balanceOf(ownerAddress);

    Assert.equal(actualBalance, 100, "Owner should have 100 ETH initially");
    Assert.equal(msg.sender, ownerAddress, "Owner should have 100 ETH initially");
  }
}

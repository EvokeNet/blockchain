pragma solidity ^0.4.19;

import "../contracts/FakeCoin.sol";

contract Campaign {
  //public properties
  string public Name;
  //private properties
  address _owner;
  uint _fundingGoal;
  address _tokenAddress;
  uint _availableSeats;
  uint _maxSeats;
  address[] _seats;

  /**
  @dev Sets Campaign goal
  @param fundingGoal Number of fakeCoins
  */
  function SetFundingGoal(uint fundingGoal) public {
    _fundingGoal = fundingGoal;
  }

  /**
  @dev Sets address of the FakeCoin contract
  @param tokenAdress Address of the fakeCoin
  */
  function SetTokenAddress(address tokenAdress) public {
    _tokenAddress = tokenAdress;
  }

  /**
  @dev Gets Campaign goal
  @return {
    "fundingGoal" : number of fakeCoins
  }
  */
  function GetGoal() public view returns (uint fundingGoal) {
    return _fundingGoal;
  }

  function GetBalance() public view returns (uint) {
    FakeCoin fc = FakeCoin(_tokenAddress);
    return fc.balanceOf(this);
  }

  function GetAvailableSeats() public view returns (uint) {
    return _maxSeats - _seats.length;
  }
}

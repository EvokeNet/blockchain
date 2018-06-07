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
    "fundingGoal" : "number of fakeCoins"
  }
  */
  function GetGoal() public view returns (uint fundingGoal) {
    return _fundingGoal;
  }

  /**
  @dev Gets Campaign fakeCoin balance
  @return {
    "balance" : "number of fakeCoins"
  }
  */
  function GetBalance() public view returns (uint balance) {
    FakeCoin fc = FakeCoin(_tokenAddress);
    return fc.balanceOf(this);
  }

  /**
  @dev Gets number of seats(enrollable students) of the Campaign
  @return {
    "availableSeats" : "number of seats available"
  }
  */
  function GetAvailableSeats() public view returns (uint availableSeats) {
    return _maxSeats - _seats.length;
  }
}

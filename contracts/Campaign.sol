pragma solidity ^0.4.23;

import "../contracts/FakeCoin.sol";

contract Campaign is ApproveAndCallFallBackInterface{
  //public properties
  string public Name;
  //private properties
  address _owner;
  uint _fundingGoal;
  address _tokenAddress;
  uint _availableSeats;
  uint _maxSeats;
  address[] _seats;


  constructor(string campaingName, uint fundingGoal) public {
    _fundingGoal = fundingGoal;
    Name = campaingName;
  }
  
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

  /**
  @dev callback function called from the fakeCoin contract when a transfer is approved
  @param from address of the spender
  @param tokens number of tokens to transfer
  @param tokenAddress address of the fakeCoin contract
  */
  function receiveApproval(address from, uint256 tokens, address tokenAddress) public {
      uint balance = GetBalance();
      uint tokensToTransfer = 0;
      if (_fundingGoal >  balance) {
          uint maxTokensToTransfer = _fundingGoal - balance;
          if (tokens >= maxTokensToTransfer) {
            tokensToTransfer = maxTokensToTransfer;
          }
          else {
            tokensToTransfer = tokens;
          }
      }
      FakeCoin(tokenAddress).transferFrom(from, this, tokensToTransfer);
  }
}

pragma solidity ^0.4.23;

import "../contracts/FakeCoin.sol";

contract Campaign is ApproveAndCallFallBackInterface{

  struct LearningActivity {
    string _activityName;
    uint _evocoinToEarn;
    mapping (address => bool) _assignedAgentsMap;
  }

  //public properties
  string public Name;
  LearningActivity[] public Activities;
  mapping (address => bool) public Agents;
  //private properties
  address _owner;
  uint _fundingGoal;
  address _tokenAddress;
  uint _availableSeats;
  uint _maxAgents;
  address[] _agents;

  mapping(address => LearningActivity[]) _agentAssignedActivities;

  constructor(string campaingName, uint maxAgents, address tokenAddress) public {
    Name = campaingName;
    _tokenAddress = tokenAddress;
    _maxAgents = maxAgents;
  }

  /**
  @dev Sets address of the FakeCoin contract
  @param tokenAdress Address of the fakeCoin
  */
  function SetTokenAddress(address tokenAdress) public {
    _tokenAddress = tokenAdress;
  }

  function EnrollAgent(address agent) public {
      require(_agents.length < _maxAgents);
      Agents[agent] = true;
      _agents.push(agent);
  }

  function CreateLearningActivity(string activityName, uint evocoinToEarn) public {
    LearningActivity memory activity = LearningActivity(activityName, evocoinToEarn);
    Activities.push(activity);
  }

  function AgentsContains(address agent) public view returns (bool) {
      return Agents[agent];
  }

  /**
  @dev Gets Campaign goal which is maxAgents * costPerAgent
  @return {
    "fundingGoal" : "number of fakeCoins"
  }
  */
  function GetFundingGoal() public view returns (uint fundingGoal) {
    fundingGoal = GetCostPerAgent() * _maxAgents;
    return fundingGoal;
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
    return _maxAgents - _agents.length;
  }

  function GetCostPerAgent() public view returns (uint costPerAgent) {
    uint arrayLength = Activities.length;
    for (uint i = 0; i < arrayLength; i++) {
      costPerAgent += Activities[i]._evocoinToEarn;
    }
  }

  /**
  @dev callback function called from the fakeCoin contract when a transfer is approved
  @param from address of the spender
  @param tokens number of tokens to transfer
  */
  function receiveApproval(address from, uint256 tokens) public {
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
      FakeCoin(_tokenAddress).transferFrom(from, this, tokensToTransfer);
  }
}

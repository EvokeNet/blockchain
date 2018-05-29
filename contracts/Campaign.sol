import "../contracts/FakeCoin.sol";

contract Campaign {
  address _owner;
  uint _goal;
  address _tokenAddress;


  function SetGoal(uint goal) public {
    _goal = goal;
  }

  function SetTokenAddress(address tokenAdress) public {
    _tokenAddress = tokenAdress;
  }

  function GetGoal() public returns (uint) {
    return _goal;
  }

  function GetBalance() public returns (uint) {
    FakeCoin fc = FakeCoin(_tokenAddress);
    return fc.balanceOf(this);
  }
}

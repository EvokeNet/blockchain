pragma solidity ^0.4.23;

import "../contracts/Campaign.sol";

contract CampaignManager {

  mapping(string => Campaign) _campaigns;
  string[] public CampaignNames;

  function CreateCampaign(string campaignName, uint fundingGoal) public {
    Campaign campaign = new Campaign(campaignName, fundingGoal);
    CampaignNames.push(campaignName);
    _campaigns[campaignName] = campaign;
  }

  function GetCampaign(string campaignName) constant returns (address) {
    return _campaigns[campaignName];
  }
}
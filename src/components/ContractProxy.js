import Web3 from 'web3';
import CampaignManager from '../contracts/CampaignManager.json';
import Campaign from '../contracts/Campaign.json';
import FakeCoin from '../contracts/FakeCoin.json';

class ContractProxy {
  constructor() {
    if (typeof window.web3 !== 'undefined') {
      window.web3Provider = window.web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      window.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    window.web3Instance = new Web3(window.web3Provider);
  }

  async getContractInstance(artifact, address) {
    var contract = require("truffle-contract");
    let solidityContract = contract(artifact);
    solidityContract.setProvider(window.web3Provider);
    var contractInstance = null;
    //var self = this;
    if (typeof address === 'undefined') {
      contractInstance = await solidityContract.deployed();
    } else {
      contractInstance = await solidityContract.at(address);
    }
    return contractInstance;
  }

  async getCampaignList() {
    var campaignList = [];
    let campaignManager = await this.getContractInstance(CampaignManager);
    let numberOfCampaigns = await campaignManager.GetNumberOfCampaigns();
    for (var i = 0; i < numberOfCampaigns; i++) {
      campaignList.push({key:i, campaignName:await campaignManager.CampaignNames(i)});
    }
    return campaignList;
  }

  async getCampaignInstance(campaignName) {
    let campaignManager = await this.getContractInstance(CampaignManager);
    let campaignAddress = await campaignManager.GetCampaign(campaignName);
    let campaignInstance = await this.getContractInstance(Campaign, campaignAddress);
    return campaignInstance;
  }

  async getCampaignFundingGoal(campaignName) {
    let instance = await this.getCampaignInstance(campaignName);
    let goal = await instance.GetFundingGoal();
    return goal;
  }

  async getOwnBalance() {
    let instance = await this.getContractInstance(FakeCoin);
    var balance = await instance.balanceOf(window.web3Instance.eth.accounts[0]);
    return balance;
  }
}

export default ContractProxy

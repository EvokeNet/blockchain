const CampaignManager = artifacts.require("CampaignManager");
const FakeCoin = artifacts.require("FakeCoin");
const Campaign = artifacts.require("Campaign");

contract('Campaign, CampaignManager, FakeCoin', async (accounts) => {

  let fakeCoinInstance;
  let campaignManagerInstance;
  let socialWorker = "Social Innovation";
  let waste = "Waste";

  beforeEach('setup contract for each test', async function () {
      fakeCoinInstance = await FakeCoin.new(100);
      cmInstance = await CampaignManager.new();
  })

  it("Computing the Campaign's Cost Per Agent For One Activity", async () => {
    await cmInstance.CreateCampaign(socialWorker, 9999, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await campaignInstance.CreateLearningActivity("activity1", 10);
    var costPerAgent = await campaignInstance.GetCostPerAgent();
    assert.equal(costPerAgent.valueOf(), 10, "cost per agent should be 10");
  })

  it("Computing the Campaign's Cost Per Agent For Several Activities", async () => {
    await cmInstance.CreateCampaign(socialWorker, 8888, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await campaignInstance.CreateLearningActivity("activity1", 50);
    await campaignInstance.CreateLearningActivity("activity2", 20);
    var costPerAgent = await campaignInstance.GetCostPerAgent();
    assert.equal(costPerAgent.valueOf(), 70, "cost per agent should be 70");
  })

  it("Computing the Campaign's Funding Goal", async () => {
    await cmInstance.CreateCampaign(socialWorker, 5, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await campaignInstance.CreateLearningActivity("activity1", 50);
    await campaignInstance.CreateLearningActivity("activity2", 20);
    var fundingGoal = await campaignInstance.GetFundingGoal();
    assert.equal(fundingGoal.valueOf(), 350, "fundingGoal should be 350, 5*70=350");
  })

  it("The Free Campaign; Auditing a Campaign", async () => {
    await cmInstance.CreateCampaign(socialWorker, 5, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await campaignInstance.CreateLearningActivity("activity1", 0);
    var fundingGoal = await campaignInstance.GetFundingGoal();
    var costPerAgent = await campaignInstance.GetCostPerAgent();
    assert.equal(fundingGoal.valueOf(), 0, "fundingGoal should be 0, 5*0=0");
    assert.equal(costPerAgent.valueOf(), 0, "cost per agent should be 0");
  })

});

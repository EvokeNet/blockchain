const CampaignManager = artifacts.require("CampaignManager");

contract('CampaignManager test', async (accounts) => {

  it("It should create Social Worker Campaign", async () => {
     let instance = await CampaignManager.deployed();
     let socialWorker = "Social Worker";
     await instance.CreateCampaign(socialWorker, 100);
     let campaignName = await instance.CampaignNames(0);
     assert.equal(campaignName.toString(), "Social Worker");
  })
})

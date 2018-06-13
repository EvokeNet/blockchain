const CampaignManager = artifacts.require("CampaignManager");
const FakeCoin = artifacts.require("FakeCoin");
const Campaign = artifacts.require("Campaign");

contract('MakeDonation', async (accounts) => {

  it("Social Worker Campaign should have 10 fakecoins", async () => {
    let fakeCoinInstance = await FakeCoin.deployed();
    let cmInstance = await CampaignManager.deployed();
    let socialWorker = "Social Worker";
    await cmInstance.CreateCampaign(socialWorker, 50);
    let waste = "Waste";
    await cmInstance.CreateCampaign(waste, 10);
    let campaignName = await cmInstance.CampaignNames(0);
    let campaignName2 = await cmInstance.CampaignNames(1);
    assert.equal(campaignName.toString(), "Social Worker");
    assert.equal(campaignName2.toString(), "Waste");
    let campaignAddress = await cmInstance.GetCampaign("Social Worker");
    //var campaignInstance = await Campaign.at(campaignAddress);
    await fakeCoinInstance.approveAndCall(campaignAddress, 10);
    //let balance = await instance.balanceOf.call(accounts[0]);
    //let campaignBalance = await instance.balanceOf.call(campaignAddress);
    //assert.equal(balance.valueOf(), 90);
    //assert.equal(campaignBalance.valueOf(),10)
  })

})

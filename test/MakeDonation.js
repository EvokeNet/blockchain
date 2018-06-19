const CampaignManager = artifacts.require("CampaignManager");
const FakeCoin = artifacts.require("FakeCoin");
const Campaign = artifacts.require("Campaign");

contract('MakeDonation', async (accounts) => {

  it("Social Worker Campaign should have 10 fakecoins", async () => {
    let fakeCoinInstance = await FakeCoin.deployed();
    let cmInstance = await CampaignManager.deployed();
    let socialWorker = "Social Worker";
    console.log("Creating Campaign");
    await cmInstance.CreateCampaign(socialWorker, 50, fakeCoinInstance.address);
    let waste = "Waste";
    await cmInstance.CreateCampaign(waste, 10, fakeCoinInstance.address);
    let campaignName = await cmInstance.CampaignNames(0);
    let campaignName2 = await cmInstance.CampaignNames(1);
    assert.equal(campaignName.toString(), "Social Worker");
    assert.equal(campaignName2.toString(), "Waste");
    let campaignAddress = await cmInstance.GetCampaign("Social Worker");
    var campaignInstance = await Campaign.at(campaignAddress);
    //await campaignInstance.SetTokenAddress(fakeCoinInstance.address);
    await fakeCoinInstance.approve(campaignAddress,10);
    await campaignInstance.receiveApproval(accounts[0],10);
    let balanceDonor = await fakeCoinInstance.balanceOf(accounts[0]);
    assert.equal(balanceDonor.valueOf(), 90);
    let balanceCampaign = await fakeCoinInstance.balanceOf(campaignInstance.address);
    assert.equal(balanceCampaign.valueOf(), 10);    

  })

})

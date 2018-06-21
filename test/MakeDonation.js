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

  it("Donor donates a little amount to a Campaign", async () => {
    await cmInstance.CreateCampaign(socialWorker, 50, fakeCoinInstance.address);
    await cmInstance.CreateCampaign(waste, 10, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await fakeCoinInstance.approveAndCall(campaignAddress,10);
    let balanceDonor = await fakeCoinInstance.balanceOf(accounts[0]);
    assert.equal(balanceDonor.valueOf(), 90, "donor balance should be 90");
    let balanceCampaign = await fakeCoinInstance.balanceOf(campaignInstance.address);
    assert.equal(balanceCampaign.valueOf(), 10, "campaing balance should be 10" );
  })

  it("Donor over-donates a Campaign; Donors get change back", async () => {
    await cmInstance.CreateCampaign(socialWorker, 50, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await fakeCoinInstance.approveAndCall(campaignAddress,55);
    let balanceDonor = await fakeCoinInstance.balanceOf(accounts[0]);
    assert.equal(balanceDonor.valueOf(), 50, "donor balance should be 50");
    let balanceCampaign = await fakeCoinInstance.balanceOf(campaignInstance.address);
    assert.equal(balanceCampaign.valueOf(), 50, "campaign balance should be 50" );
  })

  it("Donor cannot donate because insufficient funds", async () => {
    await cmInstance.CreateCampaign(socialWorker, 50, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    try {
      await fakeCoinInstance.approveAndCall(campaignAddress,999);
      throw null;
    } catch (e) {
      assert(e.message.startsWith("VM Exception while processing transaction: revert"),"error should be revert");
    }
    let balanceDonor = await fakeCoinInstance.balanceOf(accounts[0]);
    assert.equal(balanceDonor.valueOf(), 100, "donor balance should be 100");
    let balanceCampaign = await fakeCoinInstance.balanceOf(campaignInstance.address);
    assert.equal(balanceCampaign.valueOf(), 0, "campaign balance should be 0" );
  })

  it("Donor donates to an already funded Campaign", async () => {
    await cmInstance.CreateCampaign(socialWorker, 50, fakeCoinInstance.address);
    let campaignAddress = await cmInstance.GetCampaign(socialWorker);
    var campaignInstance = await Campaign.at(campaignAddress);
    await fakeCoinInstance.approveAndCall(campaignAddress,50);
    let balanceDonor = await fakeCoinInstance.balanceOf(accounts[0]);
    assert.equal(balanceDonor.valueOf(), 50, "donor balance should be 50, first stage");
    let balanceCampaign = await fakeCoinInstance.balanceOf(campaignInstance.address);
    assert.equal(balanceCampaign.valueOf(), 50, "campaign balance should be 50, first stage" );
    await fakeCoinInstance.approveAndCall(campaignAddress,1);
    let balanceDonor2 = await fakeCoinInstance.balanceOf(accounts[0]);
    assert.equal(balanceDonor2.valueOf(), 50, "donor balance should be 50, second stage");
    let balanceCampaign2 = await fakeCoinInstance.balanceOf(campaignInstance.address);
    assert.equal(balanceCampaign2.valueOf(), 50, "campaign balance should be 50, second stage" );
  })


})

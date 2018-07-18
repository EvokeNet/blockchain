const FakeCoin = artifacts.require("FakeCoin");

contract('FakeCoin test', async (accounts) => {

  it("should put 100 FakeCoin in the first account", async () => {
     let instance = await FakeCoin.deployed();
     let balance = await instance.balanceOf.call(accounts[0]);
     console.log(accounts[0]);
     assert.equal(balance.valueOf(), 100);
  })
})

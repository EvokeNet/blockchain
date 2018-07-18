const fs = require('fs');


module.exports = function(deployer) {
  fs.copyFile('build/contracts/Campaign.json', 'src/contracts/Campaign.json', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Campaign copied to destination');
  });

  fs.copyFile('build/contracts/FakeCoin.json', 'src/contracts/FakeCoin.json', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('FakeCoin copied to destination');
  });

  fs.copyFile('build/contracts/CampaignManager.json', 'src/contracts/CampaignManager.json', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('CampaignManager copied to destination');
  });
};

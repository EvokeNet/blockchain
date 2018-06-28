import React, { Component } from 'react';

import Header from "./Header.js"
import MakeCampaignDonation from './MakeCampaignDonation.js'
import CampaignList from './CampaignList.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MakeCampaignDonation />
      </div>
    );
  }
}

export default App;

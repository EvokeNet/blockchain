import React, { Component } from 'react';

import Header from "./Header.js"
import MakeCampaignDonation from './MakeCampaignDonation.js'
import CampaignList from './CampaignList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={CampaignList} />
          <Route path="/makeCampaignDonation" component={MakeCampaignDonation} />
        </div>
      </Router>
    );
  }
}

export default App;

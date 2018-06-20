import React, { Component } from 'react';

import Header from "./Header.js"
import CampaignList from './CampaignList.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CampaignList />
      </div>
    );
  }
}

export default App;

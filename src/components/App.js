import React, { Component } from 'react';

import Header from "./Header.js"
import CampaignList from './CampaignList.js'
import ContractProxy from './ContractProxy.js'


class App extends Component {

  constructor(props) {
    super(props);
    window.contractProxy = new ContractProxy();
  }

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

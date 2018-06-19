import React, { Component } from 'react';
import Header from "./components/Header.js"
import CampaignList from './components/CampaignList.js'

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

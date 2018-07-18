import React, { Component } from 'react';

import literacyBanner from '../assets/img/displaced-people-banner.png';
import Campaign from './Campaign.js';
import './CampaignList.css';

class CampaignList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };
  }

  componentDidMount() {
      var self = this;
      window.contractProxy.getCampaignList().then(function(campaign){
        self.setState({campaigns: campaign});
      });
  }

  render() {
    var campaignList = this.state.campaigns.map(function(camp){
                return <Campaign key={camp.key} campaignName={camp.campaignName}></Campaign>;
              })
    return (
      <main>
        <div className="App__Row">
          <section className="campaign">
              <h1>Global Challenge: <span>Displaced People</span></h1>
              <img src={ literacyBanner } className="campaign__banner"/>
              <ul className="campaigns">
                {campaignList}
              </ul>
          </section>
        </div>
      </main>
    );
  }
}

export default CampaignList;

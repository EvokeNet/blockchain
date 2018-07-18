import React, { Component } from 'react';

import literacyBanner from '../assets/img/displaced-people-banner.png';
import Campaign from './Campaign.js';
import './CampaignList.css';

class CampaignList extends Component {
  render() {
    return (
      <section>
        <div className="App__Row">
          <section className="campaign">
              <h1>Global Challenge: <span>Displaced People</span></h1>
              <img src={ literacyBanner } className="campaign__banner"/>
              <ul className="campaigns">
                <li>
                  <Campaign />
                </li>
                <li>
                  <Campaign />
                </li>
              </ul>
          </section>
        </div>
      </section>
    );
  }
}

export default CampaignList;

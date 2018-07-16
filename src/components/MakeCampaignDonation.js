import React, { Component } from 'react';

import './Campaign.css';

import Campaign from './Campaign.js';
import Formatter from "../util/Formatter";
import { Link } from 'react-router-dom';

class MakeCampaignDonation extends Component {

  static defaultDonation = '0'

  constructor(props) {
    super(props);

    this.state = {
      donationToDisplay: MakeCampaignDonation.defaultDonation
    }

    this.handleDonation = this.handleDonation.bind(this);
    this.clearDonation = this.clearDonation.bind(this);
  }

  handleDonation(event) {
    const text = event.target.value;

    this.setState({
      donationToDisplay: text
    });
  }

  clearDonation(event) {
    this.setState({
      donationToDisplay: MakeCampaignDonation.defaultDonation
    });
  }

  render() {
    return (
      <section className="content">
        <div className="campaign-instance">
          <h7>Campaign Instance Name 1</h7>
          <h8>Funding Goal&nbsp;<span>2400 EVC</span></h8>
          <div className="campaign-instance-content">
            <p className="no-margins">
              When television was young, there was a hugely popular show based on the still popular fictional character of Superman. The opening of that show had a familiar phrase that went, “Look. Up in the sky. It’s a bird. It’s a plane. It’s Superman!” How beloved Superman has become in our culture and the worldwide fascination with extraterrestrials and all things cosmic only emphasizes that there is a deep curiosity in all humans about nature and astronomy, even if many people would not know to call it astronomy…
            </p>
          </div>
          <div className="campaign-instance-content">
            <div className="campaign-instance-content-container">
              <div className="campaign-instance-evc-input">
                <input data-donation-input
                       type="number"
                       value={ this.state.donationToDisplay }
                       onChange={ this.handleDonation }
                       className="campaign-instance-evc-input-txt" />
                <div>EVC</div>
              </div>
              <input data-clear-btn
                     type="button"
                     value="Clear"
                     className="clear-btn"
                     onClick={this.clearDonation} />
            </div>
            <Link to="/thankyoupage">
              <input type="button" value="Fund" className="fund-btn" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default MakeCampaignDonation;

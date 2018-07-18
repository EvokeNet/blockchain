import React, { Component } from 'react';

import './Campaign.css';

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundingGoal: '0'
    };
  }

  componentDidMount() {
      var self = this;
      window.contractProxy.getCampaignFundingGoal(this.props.campaignName).then(function(goal) {
        self.setState({fundingGoal: goal.toString(10)});
      });
  }

  render() {
    return (
      <li className="campaign-instance">
        <h7>{this.props.campaignName}</h7>
        <h8>Funding Goal&nbsp;<span>{this.state.fundingGoal} EVC</span></h8>
        <div className="campaign-instance-content">
          <p className="no-margins">
            When television was young, there was a hugely popular show based on the still popular fictional character of Superman. The opening of that show had a familiar phrase that went, “Look. Up in the sky. It’s a bird. It’s a plane. It’s Superman!” How beloved Superman has become in our culture and the worldwide fascination with extraterrestrials and all things cosmic only emphasizes that there is a deep curiosity in all humans about nature and astronomy, even if many people would not know to call it astronomy…
          </p>
          <input type="button" value="Fund" className="fund-btn" />
        </div>
      </li>
    );
  }
}

export default Campaign;

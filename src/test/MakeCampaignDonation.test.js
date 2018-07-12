import React from 'react';
import { shallow, mount } from 'enzyme';

import Formatter from "../util/Formatter.js";
import MakeCampaignDonation from '../components/MakeCampaignDonation.js'

describe("MakeCampaignDonation", () => {
    it("a basic test", () => {
      expect(true).toEqual(true);
    });

    it("has a Clear button", () => {
      const subject = shallow(<MakeCampaignDonation />)
      const aButton = subject.find('[data-clear-btn]');

      expect(aButton.exists()).toEqual(true);
      expect(aButton.prop('value')).toEqual('Clear');
    })

    it("clears the text when clicked", () => {
      const subject = shallow(<MakeCampaignDonation />)
      const aButton = subject.find('[data-clear-btn]');
      subject.setState({
        donationToDisplay: "1,000"
      })

      aButton.simulate('click');

      expect(subject.state().donationToDisplay).toEqual("0");
    });
});

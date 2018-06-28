import React from 'react';
import { shallow } from 'enzyme';

import Formatter from "../util/Formatter.js";
import MakeCampaignDonation from '../components/MakeCampaignDonation.js'

describe("MakeCampaignDonation", () => {
    // TODO: Reuse the logic from the other component in Campaign List Page
    it("formats the input into EVC", () => {
      const subject = shallow(<MakeCampaignDonation />);
      const amount = 1000;

      const results = subject.instance().format(amount);

      expect(results).toEqual("1,000.0 EVC");
    });

    it("formats the input into EVC", () => {
      const subject = shallow(<MakeCampaignDonation />);
      const amount = 0;

      const results = subject.instance().format(amount);

      expect(results).toEqual("0.0 EVC");
    });

    it("formats the input into EVC", () => {
      const subject = shallow(<MakeCampaignDonation />);
      const amount = 9999999;

      const results = subject.instance().format(amount);

      expect(results).toEqual("9,999,999.0 EVC");
    });
});

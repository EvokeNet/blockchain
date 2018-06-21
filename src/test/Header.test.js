import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header.js'

describe("Header", () => {

  describe("when it's just a browser", () => {
    it("redirects to an FAQ page", () => {});
  });

  describe("when Donor has EVC", () => {
    it("shows the Donor's organization", () => {
      const subject = shallow(<Header name="aDonor" balance={ 1000 }/>);

      const aNode = subject.find("[data-donor-name]");

      expect(aNode.exists()).toEqual(true);
      expect(aNode.text()).toEqual("aDonor");
    });

    it("shows the Donor's balance for a small amount", () => {
      const subject = shallow(<Header name="aDonor" balance={ 1000 }/>);

      const aNode = subject.find("[data-donor-balance]");

      expect(aNode.exists()).toEqual(true);
      expect(aNode.text()).toEqual("1,000.0 EVC");
    });

    it("shows the Donor's balance for a big amount", () => {
      const subject = shallow(<Header name="aDonor" balance={ 999888 }/>);

      const aNode = subject.find("[data-donor-balance]");

      expect(aNode.exists()).toEqual(true);
      expect(aNode.text()).toEqual("999,888.0 EVC");
    });
  });

});


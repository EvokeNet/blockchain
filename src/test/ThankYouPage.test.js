import React from 'react';
import { shallow } from 'enzyme';

import ThankYouPage from '../components/ThankYouPage';

describe("ThankYouPage", () => {
  it('says a big THANK YOU!', () => {
    const subject = shallow( <ThankYouPage /> );
    const text = subject.text();

    expect(text).toEqual(expect.stringContaining("Thank You"));
  });

  it('thanks the user for empowering 200 agents and 40 mentors', () => {
    const subject = shallow( <ThankYouPage /> );
    const text = subject.text();

    expect(text).toEqual(expect.stringContaining("for empowering 200 agents and 40 mentors"));
  });
});

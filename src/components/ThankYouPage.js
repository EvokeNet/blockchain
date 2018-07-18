import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ThankYouPage.css'

class ThankYouPage extends Component {

  render() {
    return (
      <section className='App__Row section-row'>
        <div>
          <div className='thank-you-header'>Thank You</div>
        </div>
          <p className= 'empowerment-statement'>for empowering 200 agents and 40 mentors</p>
        <div className='thank-you-content'>
          <div>
            <div>
              <time>January 14, 2018</time>
              <img className="donor-icon" src="https://static1.squarespace.com/static/57a0dd1dbebafbfbfe80f9a7/t/58cac198b3db2b310b041269/1512410649737/rockefeller.png?format=750w" />
            </div>
            <div>
              <h1>World Vision</h1>
              <p>Campaign: Limpopo, South Africa</p>
              <p className="success">Funded $200,000.00 USD</p>
            </div>
            <dl className="thank-you-transaction-list">
              <div className="thank-you-transaction-list-item">
                <dt>TxHash</dt>
                <dd>0x60b725f10c9c85c70d97880dfe8191b3</dd>
              </div>
              <div className="thank-you-transaction-list-item">
                <dt>TxReceipt Status</dt>
                <dd className="success">Success</dd>
              </div>
              <div className="thank-you-transaction-list-item">
                <dt>Block Height</dt>
                <dd>5934394 (2 block confirmations)</dd>
              </div>
              <div className="thank-you-transaction-list-item">
                <dt>Time Stamp</dt>
                <dd>32 secs ago (Jul-09-2018 05:50:27 PM +UTC)</dd>
              </div>
              <div className="thank-you-transaction-list-item">
                <dt>From</dt>
                <dd>0x3b5d5c3712955042212316173ccf37be</dd>
              </div>
              <div className="thank-you-transaction-list-item">
                <dt>To</dt>
                <dd>0x2cd6ee2c70b0bde53fbe6cac3c8b8bb1</dd>
              </div>
              <div className="view-more">
                View More <FontAwesomeIcon icon="external-link-alt" />
              </div>
            </dl>
          </div>
          <div className="right-split">
           <img className="student-pic" src="https://pbs.twimg.com/media/CvuYMpRWgAAHDbw.jpg:large" />
          </div>
        </div>
        <h1 className="navigate-back-to-campaigns">Back to Campaigns</h1>
      </section>
    );
  };
}

export default ThankYouPage;

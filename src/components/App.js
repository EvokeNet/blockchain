import React, { Component } from 'react';
import Header from "./Header.js"
import MakeCampaignDonation from './MakeCampaignDonation.js'
import ThankYouPage from './ThankYouPage';
import CampaignList from './CampaignList.js';
import ContractProxy from './ContractProxy.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faExternalLinkAlt)

class App extends Component {

  constructor(props) {
    super(props);
    window.contractProxy = new ContractProxy();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route exact path="/" component={CampaignList} />
            <Route path="/makeCampaignDonation" component={MakeCampaignDonation} />
            <Route path="/thankyoupage" component={ThankYouPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

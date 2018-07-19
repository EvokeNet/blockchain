import React, { Component } from 'react';
import Header from "./Header.js"
import MakeCampaignDonation from './MakeCampaignDonation.js'
import ThankYouPage from './ThankYouPage';
import CampaignList from './CampaignList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faExternalLinkAlt)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div name="hddr" id="hddr"><Header /></div>
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

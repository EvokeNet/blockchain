import React, { Component } from 'react';

import evokeLogo from "../assets/img/evoke-logo.png"
import donorIcon from "../assets/img/donor-icon.png"
import Formatter from "../util/Formatter.js";
import { Link } from 'react-router-dom';
import "./Header.css"

class Header extends Component {

  static backLink = <a href="/">Back to Campaigns</a>
  //<Link className='link-back' to='/'> Back to Campaigns </Link>
  static navigationOptions = () => {
    return {
      backNavigator: Header.backLink
    };
  };

  formatEvocoin(amount) {
    const formatter = new Formatter();

    return formatter.format(amount);
  }

  render() {

    return (
      <header className="App">
        <div className="App__Row">
            <div className="App__Row1">
                <img src={ evokeLogo } alt="The Evoke logo."/>
                <h1 className="App__DonorName" data-donor-name>{ this.props.name }</h1>
                <img src={ donorIcon } alt="A profile of the organization."/>
            </div>
            <div className="App__Row2">
              { Header.navigationOptions().backNavigator }
              <h1 className="App__DonorBalance App__DonorName" data-donor-balance>{ this.formatEvocoin(this.props.balance) }</h1>
            </div>
        </div>
      </header>
    );
  }


}

export default Header;

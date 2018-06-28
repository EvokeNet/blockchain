import React, { Component } from 'react';

import evokeLogo from "../assets/img/evoke-logo.png"
import donorIcon from "../assets/img/donor-icon.png"
import Formatter from "../util/Formatter.js";
import "./Header.css"

class Header extends Component {

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
            <h1 className="App__DonorBalance" data-donor-balance>{ this.formatEvocoin(this.props.balance) }</h1>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';

import evokeLogo from "../assets/img/evoke-logo.png"
import donorIcon from "../assets/img/donor-icon.png"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <header className="App">
        <div className="App__Row">
            <div className="App__Row1">
                <img src={ evokeLogo } alt="The Evoke logo."/>
                <h1 className="App__DonorName">Name / organization</h1>
                <img src={ donorIcon } alt="A profile of the organization."/>
            </div>
            <h1 className="App__DonorBalance">52,000.0 EVC</h1>
        </div>
      </header>
    );
  }
}

export default Header;

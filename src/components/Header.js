import React, { Component } from 'react';

import evokeLogo from "../assets/img/evoke-logo.png"
import donorIcon from "../assets/img/donor-icon.png"
import "./Header.css"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
  }

  componentDidMount() {
      var self = this;
      window.contractProxy.getOwnBalance().then(function(coinBalance) {
        self.setState({balance: coinBalance});
      });
  }

  formatEvocoin(amount) {
    const formattedValue = Number(amount).toLocaleString() + '.0'
    const tickerSymbol = 'EVC';

    return `${ formattedValue } ${ tickerSymbol }`
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
            <h1 className="App__DonorBalance" data-donor-balance>{ this.formatEvocoin(this.state.balance) }</h1>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
// import logo from '/Users/wolfea/Prime/React/superhero-react/src/logo.svg';
import Yogurt from './Yogurt.png'

class Header extends Component {

  render() { 
    return ( 
      <header className="App-header">
        <img src={Yogurt} className="App-logo" alt="logo" />
        <h1>SuperHero!</h1>
      </header>
     );
  }
}
 
export default Header;
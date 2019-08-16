import React, { Component } from 'react';
import './HeroItem.css';

class HeroItem extends Component {
  state = { 
    unmask: false,
   };

  handleClick = () => {
    console.log('Unmasked');
    this.setState({
      unmask: !this.state.unmask,
    })
  }

  render() { 
    return ( 
      <li key={this.props.hero.alias}><img src={this.props.hero.icon} alt=''/>
        <b>{this.props.hero.superheroName}: </b> <br></br>
            Alias - {this.state.unmask ? `${this.props.hero.alias}` : 'unknown'},
            Power - {this.props.hero.power},
            On Duty: {this.props.hero.onDuty ? 'Yes' : 'No'} <br></br>
            <button onClick={this.handleClick}>Toggle Alias</button> <br></br>
            <button onClick={this.props.revengersAssemble}>Assemble</button>
      </li>
     );
  }
}
 
export default HeroItem;
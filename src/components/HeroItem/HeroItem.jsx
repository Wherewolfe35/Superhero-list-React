import React, { Component } from 'react';
import './HeroItem.css';

class HeroItem extends Component {
  state = {  }
  render() { 
    return ( 
      <li key={this.props.hero.alias}><img src={this.props.hero.icon} alt=''/>
        <b>{this.props.hero.superheroName}: </b> <br></br>
        Alias - {this.props.hero.alias},
            Power - {this.props.hero.power},
            On Duty: {this.props.hero.onDuty ? 'Yes' : 'No'}
      </li>
     );
  }
}
 
export default HeroItem;
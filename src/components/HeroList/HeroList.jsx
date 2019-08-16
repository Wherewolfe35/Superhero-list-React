import React, { Component } from 'react';
import HeroItem from '../HeroItem/HeroItem'
import './HeroList.css'

class HeroList extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <ul>
          {this.props.heroList.map(hero => <HeroItem hero={hero} revengersAssemble={this.props.revengersAssemble}/>)}
        </ul>
      </div>
     );
  }
}
 
export default HeroList;
import React, {Component} from 'react';
import Header from '../Header/Header';
import HeroList from '../HeroList/HeroList.jsx';
import './App.css';

class App extends Component {
  //set up state with hero list
  state = {
    heroList:[{
      superheroName: 'The Flash',
      alias: 'Barry Allen',
      power: 'Super Speed',
      icon: 'http://findicons.com/files/icons/1333/justice_league/16/flash.png',
      onDuty: true
    }, { superheroName: 'Yogurt Pockets', alias: 'Aaron Wolfe', power: 'Fills Pockets with Yogurt', icon: 'https://png-2.vector.me/files/images/2/0/202306/yogurt_thumb.jpg', onDuty: false }, { superheroName: 'Cookie Monster', alias: 'Sid', power: 'Eats all the cookies (and makes a mess)', icon: 'http://findicons.com/files/icons/1156/fugue/16/cookie_bite.png', onDuty: true }],
  }


  render() {
    return (
      <div className="App">
        {/* {JSON.stringify(this.state.heroList)} */}
        <Header />
        <HeroList heroList={this.state.heroList}/>
      </div>
    );
  }
}

export default App;

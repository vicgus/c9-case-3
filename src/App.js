import React from 'react';
import './App.css';
import blackstatus from './pics/black_status.png';
import back from './pics/back.png';
import settings from './pics/settings.png';
import down from './pics/down.png';
import DropChild from './dropdownchild.js';
import Sibling from './sibling.js';


let defaultStyle = {
  width: '375px',
  fontSize: '5'
};


let salonger = [
  {
    name: 'Sax o fön',
    price: 320,
    address: 'Rådmansgatan 46',
    description: 'Lorem ipsum...'
  },
  {
    name: 'Hårizont',
    price: 520,
    address: 'Götgatan 1',
    description: 'Ipsum lorem...'
  },
  {
    name: 'Hårhuset',
    price: 220,
    address: 'Tätorpsvägen 45',
    description: 'Sumip emrol...'
  },
  {
    name: 'Hårhuset',
    price: 220,
    address: 'Sergels Torg 4005',
    description: 'Emrol sumip...'
  },
];

console.log(salonger)


class MenuBar extends React.Component{
  render() {
    return(
      <div className="App-header">
        <h1>
          <img className= "left" src= {back}/>
          Hår
          <img className= "right" src= {settings}/>
        </h1>
      </div>
    );
  }
}

let fakeServerData = {
  salong: {
    name: 'Sax o Fön',
    price: 320
  }
};

class DropDownParent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {range: ''};
    this.changeRange = this.changeRange.bind(this);
  }

  //EXPORT NEWRANGE??? LÖSNING???
  changeRange(newRange) {
    this.setState({
      range: newRange
    });
    // console.log(this.setState.range, newRange);
  }

  componentDidMount() {
    this.setState({serverData: fakeServerData})
  }

  render() {
    return <div>  
              <DropChild range={this.state.range} onClick={this.changeRange} />
              <Sibling range = {this.state.range} onClick={this.changeRange} />

            </div>
  } 
}

class SalongList extends React.Component{
  render() {
    return(
    <div>
      <ul>
        <li><a href="#">salong 1</a></li>
        <li><a href="#">salong 2</a></li>
        <li><a href="#">salong 3</a></li>
      </ul>
    </div>
    );
  } 
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className = "App-status"><img src= {blackstatus} alt='Status bar'/></div>
        <MenuBar/>
        <DropDownParent/>
        {/* <SalongList/> */}
      </div>
    );
  }
}

export default App;


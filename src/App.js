import React from 'react';
import logo from './download.jpg';
import './App.css';
import blackstatus from './pics/black_status.png';
import back from './pics/back.png';
import settings from './pics/settings.png';
import down from './pics/down.png';


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


// Bygg this.toggleRange
class DropDownMenu extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   const range = e.target.value;
  //   this.props.onChange(range);
  // }

  render() {
    return(
      <div className='dropdown'>
        <button className='dropbtn'>Pris<img className = "right" src={down} /></button>
        <div className='dropdown-content'>
          <a href ="#" onClick= {this.toggleRange='cheap'}>0-250</a>
          <a href ="#" onClick= {this.toggleRange='cheap'}>250-500</a>
          <a href ="#" onClick= {this.toggleRange='notCheap'}>500-1000</a>
        </div>
      </div>
    )
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
  constructor() {
    super();
    this.state = {serverData: {}}
  }

  // componentDidMount() {
  //   this.setState({serverData: salongData});
  // }
  
  render() {
    return (
      <div className="App">
        <div className = "App-status"><img src= {blackstatus}/></div>
        <MenuBar/>
        <DropDownMenu/>
        <SalongList/>
      </div>
    );
  }
}

export default App;


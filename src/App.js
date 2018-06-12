import React from 'react';
import './App.css';
import blackstatus from './pics/black_status.png';
import back from './pics/back.png';
import settings from './pics/settings.png';
import down from './pics/down.png';
import DropChild from './dropdownchild.js';
import Sibling from './sibling.js';

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
  },
  salong: {
    name: 'Hårizont',
    price: 520
  },
  salong: {
    name: 'Hårhuset',
    price: 520
  },
  salong: {
    name: 'Hair & Nu',
    price: 250
  },
  salong: {
    name: 'Hårley Davidson',
    price: 900
  }
};

class Salong extends React.Component {
  render() {
    return(
      <div className='listitem'>
        <h1>{this.props.name} </h1>
        <h1>{this.props.price} </h1>
      </div>
    )
  }
}

class DropDownParent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {range: '', serverData: {}};
    this.changeRange = this.changeRange.bind(this);
  }

  changeRange(newRange) {
    this.setState({
      range: newRange
    });
    // console.log(this.setState.range, newRange);
  }

  componentDidMount() {
    setTimeout(() => {
    this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return <div>  
              <DropChild range={this.state.range} onClick={this.changeRange} />
              {this.state.serverData.salong &&
              <h1>{this.state.serverData.salong.name}</h1>}
              <Salong price={this.state.serverData.salong && 
                            this.state.serverData.salong.price}/>
               {/* <Sibling range = {this.state.range} onClick={this.changeRange} /> */}
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


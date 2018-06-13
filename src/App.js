import React from 'react';
import './App.css';
import blackstatus from './pics/black_status.png';
import back from './pics/back.png';
import settings from './pics/settings.png';
import down from './pics/down.png';
import DropChild from './dropdownchild.js';
import fullstar from './pics/fullstar.png';


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

let salongServerData = {
  salong: [
    {
      key: 1,
      name: 'Sax o Fön',
      address: 'Rådmansgatan 46',
      price: 320,
      description: 'Lorem ipsum',
      time: '12:00'
    },
    {
      key: 2,
      name: 'Hårizont',
      address: 'Götgatan 40',
      price: 520,
      description: 'Ipsum Lorem',
      time: '13:00'
    },
    {
      key: 3,
      name: 'Hårhuset',
      address: 'Södra Vägen 24',
      price: 520,
      description: 'Remol sumip',
      time: '15:00'
    },
    {
      key: 4,
      name: 'Hair & Nu',
      address: 'Saxvägen 12888',
      price: 250,
      description: 'Sumip Remol',
      time: '11:00'
    },
    {
      key: 5,
      name: 'Hårley Davidson',
      price: 900,
      address: 'Klippgatan 6',
      description: 'Summol ipre',
      time: '13:00'
    }
  ]
};


class Salong extends React.Component {
  render() {
    let salongInfo = this.props.salongInfo;
    return(
      <div className='listitem' display='inline-block'>
        <div className='salname'> 
          {salongInfo.name} 
            <div className='salprice'> {salongInfo.price}</div>
        </div>
        <hr />
      </div>
    )
  }
}

class DropDownParent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
      range: ''
    };
    this.changeRange = this.changeRange.bind(this);
  }

  changeRange(newRange) {
    this.setState({
      range: newRange
    });
    console.log(newRange);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: salongServerData});
    }, 500);
  }

  render() {
    return (
          <div>
            {this.state.serverData.salong ?
            <div>
              <DropChild range={this.state.range} onClick={this.changeRange} id={this.state.id}/>
              {this.state.serverData.salong.filter(salongInfo =>
                salongInfo.price
              ).map(salongInfo =>
                <Salong salongInfo={salongInfo} />              
              )}
            </div> : <h1>loading</h1>
        }
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
      </div>
    );
  }
}

export default App;
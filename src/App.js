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
  salong: [
    {
      name: 'Sax o Fön',
      price: 320
    },
    {
      name: 'Hårizont',
      price: 520
    },
    {
      name: 'Hårhuset',
      price: 520
    },
    {
      name: 'Hair & Nu',
      price: 250
    },
    {
      name: 'Hårley Davidson',
      price: 900
    }
  ]
};

console.log(fakeServerData.salong)

class Salong extends React.Component {
  render() {
    let salongInfo = this.props.salongInfo;
    return(
      <div className='listitem'>
        <h1> {salongInfo.name} </h1>
        <h1> {salongInfo.price} </h1>
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
    return (
          <div>
            {this.state.serverData.salong ?
            <div>
              <DropChild range={this.state.range} onClick={this.changeRange} />
              {this.state.serverData.salong.map(salongInfo =>
                <Salong salongInfo={salongInfo} />              
              )}
              {/* {this.state.serverData.salong.map(salongPrice =>
                <Salong price={salongPrice.price} />              
              )} */}
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
        {/* <SalongList/> */}
      </div>
    );
  }
}

export default App;
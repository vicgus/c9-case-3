import React from 'react';
import './App.css';
import blackstatus from './pics/black_status.png';
import back from './pics/back.png';
import settings from './pics/settings.png';
import down from './pics/down.png';
import DropChild from './dropdownchild.js';
import fullstar from './pics/fullstar.png';
import {salonger} from './salonger.js';

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

let salongServerData = salonger;

class Salong extends React.Component {
  render() {
    let salongInfo = this.props.salongInfo;
    return(
      <div className='listitem' display='inline-block'>
        <div className='salname' > 
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
    // console.log(newRange);
  }


  render() {
    return (
          <div>
            <div>
              <DropChild range={this.state.range} onClick={this.changeRange}/>
            </div>
        </div>
    );
  } 
}

class FilterList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
      topPrice: ''
    };
    this.changeList = this.changeList.bind(this);
  }

  changeList(newList) {
    this.setState({
      topPrice: newList
    });
    console.log(newList);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: salongServerData});
    }, 1000);
    setTimeout(() => {
      this.setState({topPrice: ''})
    }, 2000);
  }

  render() {
    return (
          <div>
            {this.state.serverData.salong ?
            <div>
              {this.state.serverData.salong.filter(salongInfo =>
                salongInfo.price < 600
              ).map(salongInfo =>
                <Salong salongInfo={salongInfo} onClick={this.changeList} />              
              )}
            </div> : <h1>Laddar...</h1>
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
        <FilterList />
      </div>
    );
  }
}

export default App;
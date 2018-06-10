import React from 'react';
import logo from './download.jpg';
import './App.css';
import blackstatus from './pics/black_status.png';
import back from './pics/back.png';
import settings from './pics/settings.png';

let screenWidth = '375px';

class MenuBar extends React.Component{
  render() {
    return(
      <div style={{fontSize:'5'}}>
        <h1><img src= {back}/>Hår<img src= {settings}/></h1>
      </div>
    );
  }
}

class Select extends React.Component{
  render() {
    return(
      <div>
        <select id='text'>
          <option value='Alla'>Alla</option>
          <option value='250-500'>250-500</option>
          <option value='500-1000'>500-1000</option>
        </select>
      </div>
    );
  }
}

class SalongList extends React.Component{
  render() {
    return(
    <div>
      <ul>
        <li><div><h3>Salong1</h3></div></li>
        <li><div><h3>Salong1</h3></div></li>
        <li><div><h3>Salong1</h3></div></li>
      </ul>
    </div>
    );
  } 
}

class App extends React.Component {
  render() {
    let name = 'Victor'
    return (
      <div className="App">
        <img src= {blackstatus}/>
        <MenuBar/>
        <Select/>
        <SalongList/>
      </div>
    );
  }
}

export default App;


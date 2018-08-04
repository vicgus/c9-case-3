import React from 'react';
import back from '../pics/back.png';
import settings from '../pics/settings.png';
import '../App.css';

export default class Statusbar extends React.Component {
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
  

// class MenuBar extends React.Component{
//   render() {
//     return(
//       <div className="App-header">
//         <h1>
//           <img className= "left" src= {back}/>
//           Hår
//           <img className= "right" src= {settings}/>
//         </h1>
//       </div>
//     );
//   }
// }
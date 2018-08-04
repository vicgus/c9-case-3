import React from 'react';
import Header from './Header';
import Statusbar from './Statusbar';


export default class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Statusbar/>
        <Header/>
      </div>
    );
  }
}

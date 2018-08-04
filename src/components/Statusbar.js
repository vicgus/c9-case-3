import React from 'react';
import blackstatus from '../pics/black_status.png';

export default class Statusbar extends React.Component {
    render() {
      return (
        <div className = "App-status"><img src= {blackstatus} alt='Status bar'/></div>
      );
    }
  }
  
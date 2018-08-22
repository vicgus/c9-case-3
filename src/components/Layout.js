import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Range from './Range';
import Statusbar from './Statusbar';
import Card from './Card';
import {salonger} from '../salonglist';

const salongServerData = salonger;


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      price: null,
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(price) {
    this.setState({price});
    // console.log({price});
  }

  render() {
    const title = 'Hello';
    return (
      <div className="App">
        <Statusbar />
        <Header />
        <Range title={title} />
        <Filter changeTitle={this.changeTitle.bind(this)} price={this.props.price} />
        <Card />
        {/* <Range price='Alla' rangeid='1' />
        <Range price='250' rangeid= '2' />
        <Range price='500' rangeid= '3' /> */}
      </div>
    );
  }
}

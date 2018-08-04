import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Range from './Range';
import Statusbar from './Statusbar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '0',
    };
  }

  changeTitle(price) {
    this.setState({price});
  }

  render() {
    return (
      <div className="App">
        <Statusbar />
        <Header />
        <Filter changeTitle={this.changeTitle.bind(this)} price={this.state.price} />
        {/* <Range price='Alla' rangeid='1' />
        <Range price='250' rangeid= '2' />
        <Range price='500' rangeid= '3' /> */}
      </div>
    );
  }
}

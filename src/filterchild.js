import React from 'react';

export class PriceChild extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const price = e.target.value;
    this.props.onChange(price);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.price}!
        </h1>
        <select id="range" onChange={this.handleChange}>
          <option value="250-500">
            250-500
          </option>

          <option value="500-1000">
            500-1000
          </option>

          <option value="">
            -
          </option>
        </select>
      </div>
    );
  }
}
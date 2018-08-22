import React from 'react';
import Range from './Range';
import '../App.css';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const price = e.target.value;
        this.props.changeTitle({price});
    }
    
    render() {
        return(
            <div>
                {/* <Range price={this.props.price} /> */}
                {/* <button price= '0' onClick={this.handleClick.bind(this)}>0</button>
                <button price= '200' onClick={this.handleClick.bind(this)}>500</button>
                <button price= '500' onClick={this.handleClick.bind(this)}>1000</button> */}
                <input onChange={this.handleChange.bind(this)}/>
                {/* <button onClick={this.handleChange.bind(this)} price='500'>500</button> */}
            </div>
        )
    }
}
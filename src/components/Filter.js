import React from 'react';
import Range from './Range';
import '../App.css';

export default class Filter extends React.Component {
    handleChange(e) {
        const price = e.target.value;
        this.props.changeTitle(price);
    }
    render() {
        return(
            <div>
                <Range price={this.props.price} />
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}
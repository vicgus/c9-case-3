import React from 'react';
import '../App.css';

export default class Range extends React.Component {
    render() {
        return(
            <h1>Pris: {this.props.price}</h1>
        ) 
    }
}
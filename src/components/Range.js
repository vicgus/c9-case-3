import React from 'react';
import '../App.css';

export default class Range extends React.Component {
    render() {
        console.log(this.props);
        return(
            <h1>Pris: {this.props.title}</h1>
        ) 
    }
}
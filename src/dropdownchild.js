import React from 'react';
import ranges from './ranges.js';


export default class DropChild extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleUserClick = this.handleUserClick.bind(this);
    }
    
    handleClick(e) {
        const range = e.target.value;
        this.props.onClick(range);
    }
    //Not used atm
    handleUserClick(e) {
        const topPrice = e.target.value;
        this.props.onClick(topPrice);
    }
    
    render() {
        let allRanges = {
            text:'-',
            topPrice: null
        };
        let firstRange = {
            text: '0-250',
            topPrice: 250 
        };
        let secondRange = {
            text: '250-500',
            topPrice: 500
        };
        return(
            <div>
                <div className = 'dropdown'>
                    <button className = 'dropbtn'>Pris {this.props.range}</button>
                    <div className='dropdown-content'>
                        <button className = 'dropbtn' onClick={this.handleUserClick} topPrice='' >
                        <option  onClick={this.handleClick}>{allRanges.text}</option>
                        </button>
                        <button className = 'dropbtn' onClick={this.handleUserClick} topPrice= '250'>
                        <option  onClick= {this.handleClick}>{firstRange.text}</option>
                        </button>
                        <button className = 'dropbtn' onClick={this.handleUserClick} topPrice= '250'>
                        <option  onClick= {this.handleClick}>{secondRange.text}</option>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

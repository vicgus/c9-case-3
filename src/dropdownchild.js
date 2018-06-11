import React from 'react';

export default class DropChild extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const range = e.target.value;
        this.props.onClick(range);
    }
    
    render() {
        return(
            <div className = 'dropdown'>
                <button className = 'dropbtn'>Pris {this.props.range}</button>
                <div className='dropdown-content'>
                    <option onClick={this.handleClick} range = 'Alla prisklasser'>Alla prisklasser</option>
                    <option onClick= {this.handleClick} range = '0-250'>0-250</option>
                    <option onClick= {this.handleClick} range = '250-500'>250-500</option>
                </div>
            </div>
        );
    }
}
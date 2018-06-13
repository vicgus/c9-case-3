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

    handleUserClick(e) {
        const listRange = e.target.value;
        this.props.onClick(listRange);
    }
    
    render() {
        let allRanges = 'Alla priser';
        let firstRange = '0-250';
        let secondRange = '250-500';
        return(
            
            <div>
                <div className = 'dropdown'>
                    <button className = 'dropbtn'>Pris {this.props.range}</button>
                    <div className='dropdown-content'>
                        <option  onClick={this.handleClick}>{allRanges}</option>
                        <option  onClick= {this.handleClick}>{firstRange}</option>
                        <option  onClick= {this.handleClick}>{secondRange}</option>
                    </div>
                </div>
            </div>
        );
    }
}

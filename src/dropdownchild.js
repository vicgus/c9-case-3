import React from 'react';

export default class DropChild extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const range = e.target.value;
        this.props.onChange(range);
    }
    
    render() {
        return(
            <div className = 'dropdown'>
                <button className = 'dropbtn'>Pris {this.props.range}</button>
                <div className='dropdown-content'>
                    <option onChange={this.handleChange} range = 'Alla prisklasser'>Alla prisklasser</option>
                    <option onChange= {this.handleChange} range = '0-250'>0-250</option>
                    <option onChange= {this.handleChange} range = '250-500'>250-500</option>
                </div>
            </div>
        );
    }
}
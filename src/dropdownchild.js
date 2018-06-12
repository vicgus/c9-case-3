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
            <div>
                <div className = 'dropdown'>
                    <button className = 'dropbtn'>Pris {this.props.range}</button>
                    <div className='dropdown-content'>
                        <option onClick={this.handleClick}>Alla priser</option>
                        <option onClick= {this.handleClick}>0-250</option>
                        <option onClick= {this.handleClick}>250-500</option>
                    </div>
                </div>
            </div>
        );
    }
}

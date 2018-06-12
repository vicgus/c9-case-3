import React from 'react';



export default class Sibling extends React.Component{
    render() {
        const range = this.props.range;

        return(
            <h1>Hej {range}</h1>
        )
        // let hej = 'hej'; //hej och hejtvå motsvarar mina listor fyllda av salonger
        // let hejTva = 'bonjour';
        // if ({range}== '0-250') {
        //     return(
        //         <div className ='listitem'><h1>{hej}</h1></div>
        //     );
        // } else {
        //     return(
        //         <div className='listitem'><h1>{hejTva}</h1></div>
        //     );
        // }
    }
}




import React from 'react';
var s="hey "

class DisplayArea extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<div>
            <h2>Hi, I am a DisplayArea!</h2>
            <h3 >{this.props.p}</h3>
        </div>);
    }
}
export default DisplayArea;



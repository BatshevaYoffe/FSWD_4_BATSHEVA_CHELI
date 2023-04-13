
import React from 'react';
var s="hey "

class DisplayArea extends React.Component {
    strings=[{char:"",color:""}]


    constructor(props){
        super(props)
    }
    render() {
        this.strings.concat({char:this.props.v,color:this.props.c})
        alert(this.strings)
        return (<div>
            <h2>Hi, I am a DisplayArea!</h2>
            <h3 style={{color:this.props.c}}>{this.props.v}</h3>
        </div>);
    }
}
export default DisplayArea;



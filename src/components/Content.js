import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
var m=""

class Content extends React.Component {
    constructor(props){
        super(props)
        this.onclick=this.onclick.bind(this)
        this.state={value:null,};
    }
    displayarea="display"
    onclick(val){
        alert(val)
        m=this.state.value
        alert(m)
        m+=val
        this.setState({value:m})
        this.displayarea=val
    }
    render() {
      return (<div>
        <h2>Hi, I am a Content! </h2>
        <span><DisplayArea p={this.displayarea}/></span>
        <Keyboard func={this.onclick}/>
      </div>
      );
    }
  }
  
  export default Content;
  
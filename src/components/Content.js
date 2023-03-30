import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";

class Content extends React.Component {
    constructor(props){
        super(props)
        this.onclick=this.onclick.bind(this)
    }
    displayarea="display"
    onclick(val){
        alert(val)

        this.displayarea=val
    }
    render() {
      return (<div>
        <h2>Hi, I am a Content!</h2>
        <span><DisplayArea p={this.displayarea}/></span>
        <Keyboard func={this.onclick}/>
      </div>
      );
    }
  }
  
  export default Content;
  
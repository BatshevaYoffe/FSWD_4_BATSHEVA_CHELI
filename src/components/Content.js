import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
let m=""

class Content extends React.Component {
    constructor(props){
        super(props)
        this.onclick=this.onclick.bind(this)
        this.state={value:"",};
    }
    displayarea="display"
    onclick(val){
        // alert(val)
        m=this.state.value
        // alert(m)
        m+=String(val)
        // alert(m)
        this.setState({value:String(m)})
        this.displayarea=val
    }
    render() {
      return (<div>
        <h2>Hi, I am a Content! </h2>
        <span><DisplayArea p={this.state.value}/></span>
        <Keyboard func={this.onclick}/>
        {/* <Language /> */}
      </div>
      );
    }
  }
  
  export default Content;
  
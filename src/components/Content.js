import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
import PerKey from "./PerKey"
let m=""

class Content extends React.Component {
    constructor(props){
        super(props)
        this.onclick=this.onclick.bind(this)
        this.lan1=this.lan1.bind(this)
        this.state={value:"",language:"english"};
    }
    onclick(val){
        m=this.state.value
        m+=String(val)
        this.setState({value:String(m)})
        // alert(this.state.language)
    }
    lan1(lan){
        // alert(m)
        // alert(lan)
        // this.setState({language:lan})
    }
    render() {
      return (<div>
        <h2>Hi, I am a Content! </h2>
        <span><DisplayArea p={this.state.value}/></span>
        <Keyboard lan={this.state.language} func={this.onclick}/>
        <Language func={this.lan1}/>
        {/* <PerKey func={this.onclick} /> */}
      </div>
      );
    }
  }
  
  export default Content;
  
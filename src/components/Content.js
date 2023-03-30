import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
<<<<<<< HEAD
var m=""
=======
>>>>>>> 7c8f692cbfbc9a14c123a621daf72a8ce9d8cea1

class Content extends React.Component {
    constructor(props){
        super(props)
        this.onclick=this.onclick.bind(this)
<<<<<<< HEAD
        this.state={value:null,};
=======
>>>>>>> 7c8f692cbfbc9a14c123a621daf72a8ce9d8cea1
    }
    displayarea="display"
    onclick(val){
        alert(val)
<<<<<<< HEAD
        m=this.state.value
        alert(m)
        m+=val
        this.setState({value:m})
=======

>>>>>>> 7c8f692cbfbc9a14c123a621daf72a8ce9d8cea1
        this.displayarea=val
    }
    render() {
      return (<div>
<<<<<<< HEAD
        <h2>Hi, I am a Content! </h2>
=======
        <h2>Hi, I am a Content!</h2>
>>>>>>> 7c8f692cbfbc9a14c123a621daf72a8ce9d8cea1
        <span><DisplayArea p={this.displayarea}/></span>
        <Keyboard func={this.onclick}/>
      </div>
      );
    }
  }
  
  export default Content;
  
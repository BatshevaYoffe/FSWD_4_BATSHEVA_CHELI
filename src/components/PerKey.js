import React from 'react';
import Key from './Key';
import './Key.css';
var array = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","|",";",":","/","'",",","<",">",".","?","[","]","{","}","~"]
class Keyboard extends React.Component {
  
  constructor(props){
    super(props)
    this.onclick=this.onclick.bind(this)

  }
  onclick(val){
    this.props.func(val)

  }
  render() {
    return (<div>
      <h2>Hi, I am a Keyboard!</h2>
      <div class="flex">
        {array.map((array) =>
          <div key={array.toString()}>
            <Key char={array} func={this.onclick} />
          </div>
        )}
        
      </div>
    </div>
    );
  }
}

export default Keyboard;

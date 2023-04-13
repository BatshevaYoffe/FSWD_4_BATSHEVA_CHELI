import React from 'react';
import Key from './Key';
import "./Key.css";
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var heb=["א","ב","ג","ד","ה","ו"]
var eng=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var characters = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","|",";",":","/","'",",","<",">",".","?","[","]","{","}","~"]
var array=numbers
array=array.concat(characters)
class Keyboard extends React.Component {
  
  constructor(props){
    super(props)
    this.onclick=this.onclick.bind(this)

  }
  onclick(val){
    // alert(val)
    this.props.func(val)

  }
  render() {
    var numbers = ["0","1","2","3","4","5","6","7","8","9"]
    var heb=["א","ב","ג","ד","ה","ו"]
    var eng=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var characters = ["red","blue","black","עברית","english","Delete","Delete All"," ","!","@","#","$","%","^","&","*","(",")","_","-","=","+","|",";",":","/","'",",","<",">",".","?","[","]","{","}","~"]
    var array=numbers
    array=array.concat(characters)
    if(this.props.lan=="english"){
      array=array.concat(eng)
      // alert(array)
    }
    if(this.props.lan=="עברית"){
      array=array.concat(heb)

    }
    return (<div>
      <h2>Hi, I am a Keyboard!</h2>
      <div class="flex">
        {array.map((i) =>
          <div key={i.toString()}>
            <Key char={i} func={this.onclick} />
          </div>
        )}
        
      </div>
    </div>
    );
  }
}

export default Keyboard;

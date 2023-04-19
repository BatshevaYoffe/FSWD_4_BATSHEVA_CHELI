
import React from 'react';
import './Key.css';

class Key extends React.Component {
  constructor(props){
    super(props)
    this.sayHello=this.sayHello.bind(this)
  }
  sayHello=()=> {
    this.props.func(this.props.char)

  }
  render() {
    var style = {};
    if(this.props.char===" ")style.width = "200px";
    
    return (<div class="flex" >
      <button class='key-button item' style={style}  onClick={this.sayHello}>{this.props.char}</button>
    </div>);
  }
}
export default Key;



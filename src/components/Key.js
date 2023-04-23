
import React from 'react';
import './Key.css';

class Key extends React.Component {
  constructor(props){
    super(props)
    this.clickKey=this.clickKey.bind(this)
  }
  clickKey=()=> {
    this.props.func(this.props.char)

  }
  render() {
    var style = {};
    if(this.props.char===" ")style.width = "200px";

    return (<div class="flex " >
      {this.props.char==='\t'?
      <button class='key-button item' style={style}  onClick={this.clickKey}>Enter</button>
      :<button class='key-button item' style={style}  onClick={this.clickKey}>{this.props.char}</button>
  }
    </div>);
  }
}
export default Key;



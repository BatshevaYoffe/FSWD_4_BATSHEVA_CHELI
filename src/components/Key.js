
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
    return (<div class="flex">
      <button className='item' onClick={this.sayHello}>{this.props.char}</button>

      {/* <div>
      {this.props.char=" "
          ?<button className="space" onClick={this.sayHello}>{this.props.char}</button>
          :<button onClick={this.sayHello}>{this.props.char}</button>
      }</div> */}
    </div>);
  }
}
export default Key;



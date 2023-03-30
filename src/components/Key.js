
import React from 'react';
import DisplayArea from './DisplayArea';
class Key extends React.Component {
  constructor(props){
    super(props)
    this.sayHello=this.sayHello.bind(this)
  }
  sayHello=()=> {
    this.props.func(this.props.char)

  }
  render() {
    return (<div>
      <h2>Hi, I am a key!</h2>
      <button onClick={this.sayHello}>{this.props.char}</button>
    </div>);
  }
}
export default Key;



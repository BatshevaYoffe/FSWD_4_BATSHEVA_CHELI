
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
      <button onClick={this.sayHello}>{this.props.char}</button>
    </div>);
  }
}
export default Key;



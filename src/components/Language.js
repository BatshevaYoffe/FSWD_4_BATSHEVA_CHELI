
import React from 'react';
class Language extends React.Component {
  constructor(props){
    super(props)
    this.sayHello=this.sayHello.bind(this)
  }
  sayHello=(str)=> {
    alert(str)
    this.props.func(str)

  }
  render() {
    return (<div>
      <button onClick={this.sayHello("עברית")}>עברית</button>
      <button onClick={this.sayHello("english")}>English</button>
    </div>);
  }
}
export default Language;


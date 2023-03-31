
import React from 'react';
class Language extends React.Component {
  constructor(props){
    super(props)
    this.changeLanguage=this.changeLanguage.bind(this)
  }
  changeLanguage(str){
    // alert(str)
    this.props.func(String(str))

  }
  changeB=(str)=>{
    if(str==="bold"){

    }
  }
  render() {
    return (<div>
      <button onClick={this.changeLanguage("עברית")}>עברית</button>
      <button onClick={this.changeLanguage("english")}>English</button>
      <button onClick={this.changeB("bold")}>bold</button>
    </div>);
  }
}
export default Language;


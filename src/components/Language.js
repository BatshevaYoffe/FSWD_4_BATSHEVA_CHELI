
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
  changecolor(str){
    // this.props.func2((str))

  }

  render() {
    var array=[12,14,20]
    return (<div>
        <h4>Chose Languages:</h4>
      <button onClick={this.changeLanguage("עברית")}>עברית</button>
      <button onClick={this.changeLanguage("english")}>English</button>
      <button style={{color:"red"}} onClick={this.changecolor("red")} >red</button>
        
    </div>);
  }
}
export default Language;


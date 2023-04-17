
import React from 'react';
import './Language.css'
class Language extends React.Component {

  constructor(props){
    super(props)
    this.changeLanguage=this.changeLanguage.bind(this)
  }
  
  changeLanguage(val){
    this.props.onChange(String(val));
  }

  render() {
    return (<div>
      <button class='button' onClick={() => this.changeLanguage('עברית')}>עברית</button>
      <button class='button'  onClick={() => this.changeLanguage("english")}>English</button>   
      <button class='button'  onClick={() => this.changeLanguage("emoji")}>Emoji</button> 
      <button class='button' onClick={() => this.changeLanguage("Russian")}>Russian</button>   
    </div>);
  }
}
export default Language;


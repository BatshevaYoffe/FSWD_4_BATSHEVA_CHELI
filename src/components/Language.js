
import React from 'react';
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
        <h4>Chose Languages1:</h4>
      <button onClick={() => this.changeLanguage('עברית')}>עברית</button>
      <button onClick={() => this.changeLanguage("english")}>English</button>   
      <button onClick={() => this.changeLanguage("emoji")}>Emoji</button>   
    </div>);
  }
}
export default Language;


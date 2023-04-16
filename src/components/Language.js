
import React from 'react';
class Language extends React.Component {
  constructor(props){
    super(props)
    this.changeLanguage=this.changeLanguage.bind(this)
  }
  
  changeLanguage(val){
    // console.log(val);
    this.props.onChange(String(val));
  }



  render() {
    return (<div>
        <h4>Chose Languages1:</h4>
      <button onClick={() => this.changeLanguage('עברית')}>עברית</button>
      <button onClick={() => this.changeLanguage("english")}>English</button>        
    </div>);
  }
}
export default Language;



import React from 'react';
import './Language.css'
class Language extends React.Component {
  langueges = ['עברית', 'english', 'emoji', 'Russian']
  constructor(props) {
    super(props)
    this.changeLanguage = this.changeLanguage.bind(this)
    this.onChangeValue = this.onChangeValue.bind(this)

  }

  changeLanguage(val) {
    this.props.onChange(String(val));
  }
  onChangeValue(event) {
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  }

  render() {
    return (<div>
      {/* <button class='button' onClick={() => this.changeLanguage('עברית')}>עברית</button>
      <button class='button' onClick={() => this.changeLanguage("english")}>English</button>
      <button class='button' onClick={() => this.changeLanguage("emoji")}>Emoji</button>
      <button class='button' onClick={() => this.changeLanguage("Russian")}>Russian</button> */}

      <div onChange={this.onChangeValue}>
        {this.langueges.map(
          lan =>
            <div key={lan}>
              <input type="radio" value={lan} name="gender"/> {lan}

            </div>
        )}


      </div>

    </div>);
  }
}
export default Language;


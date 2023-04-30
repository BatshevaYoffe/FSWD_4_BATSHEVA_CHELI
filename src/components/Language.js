
import React from 'react';
import './Language.css'
class Language extends React.Component {
  langueges = ['עברית', 'english', 'emoji', 'Russian']
  
  constructor(props) {
    super(props)
    this.onChangeValue = this.onChangeValue.bind(this)

  }


  onChangeValue(event) {
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  }

  render() {
    return (<div>
      <div onChange={this.onChangeValue}>
        {this.langueges.map(
          lan =>
            <div key={lan}>
              <input type="radio" value={lan} name="gender" /> {lan}
            </div>
        )}
      </div>
    </div>);
  }
}
export default Language;


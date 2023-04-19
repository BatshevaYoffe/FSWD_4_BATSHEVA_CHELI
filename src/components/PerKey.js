import React from 'react';
import Key from './Key';
import './PerKey.css';

class PerKey extends React.Component {
  isvisited=false
  font = ['Gisha', 'Aharoni', 'Monospace', 'Arial', 'Cursive', 'Fantasy', 'Levenim MT']
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
    this.click4 = this.click4.bind(this)
    this.state = { caps: 'upper', italic: 'normal' }
  }
  onclick(val) {
    this.props.func(val)

  }
  click2(val) {
    console.log(this.props.st);
    console.log(val);
    // this.isvisited=true
    if (val === 'italic') {
      this.setState({ italic: 'normal' })
      this.props.func2('normal')

    }
    else {
      this.setState({ italic: 'italic' })
          this.props.func2('italic')
    }
  }
  click3(val) {
    if (val === 'upper') {
      this.setState({ caps: 'lower' })
    }
    else {
      this.setState({ caps: 'upper' })

    }
    this.props.func3(val)
  }
  click4(val) {
    this.props.func4(val)
  }

  render() {
    return (<div>
      <div class="flex">
        <button onClick={() => this.click3(this.state.caps)}>CapsLk</button>

        <Key char={"upper-All"} func={this.onclick} />
        <Key char={"lower-All"} func={this.onclick} />
        <Key char={"Undo"} func={this.onclick} />

        {/* <button onClick={() => this.click2('normal')}>normal</button>
        <button onClick={() => this.click2("italic")}>italic</button> */}

        <button /*className={this.state.italic =='normal'?'btnselected':''}*/ style={{fontStyle:'italic',fontFamily:'Aldhabi'}} onClick={() => this.click2(this.state.italic)}>I</button>


        <select onChange={(event) => this.click4(event.target.value)}>
          {this.font.map(
            f =>
              <option style={{ fontFamily: f }} value={f}>{f}</option>
          )}
        </select>
      </div>

    </div>
    );
  }
}

export default PerKey;

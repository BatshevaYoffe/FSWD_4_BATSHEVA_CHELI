import React from 'react';
import Key from './Key';
import './Key.css';
class PerKey extends React.Component {
  font = ['Gisha', 'Aharoni', 'Monospace', 'Arial', 'Cursive', 'Fantasy', 'Levenim MT']
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
    this.click4 = this.click4.bind(this)
    this.state = { caps: 'upper' }
  }
  onclick(val) {
    this.props.func(val)

  }
  click2(val) {
    this.props.func2(val)
  }
  click3(val) {
    if (val === 'upper') {
      this.setState({ caps: 'lower' })
    }
    else {
      this.setState({ caps: 'upper' })

    }
    console.log("its click3");
    this.props.func3(val)
  }
  click4(val) {
    this.props.func4(val)

  }
  myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      console.log('chekedddd');
      text.style.display = 'block'
      // text.style.display = "block";
    } else {
      text.style.display = "none";
      console.log('nott');
    }
  }
  render() {
    return (<div>
      <h2>Hi, I am a PerKey!</h2>
      <div class="flex">
        <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
        <p id="text" style={{ display: 'none' }}>Checkbox is ALL!</p>

        <button onClick={() => this.click3(this.state.caps)}>{this.state.caps}</button>

        <Key char={"upper-All"} func={this.onclick} />
        <Key char={"lower-All"} func={this.onclick} />
        <Key char={"Undo"} func={this.onclick} />

        <button onClick={() => this.click2('normal')}>normal</button>
        <button onClick={() => this.click2("italic")}>italic</button>

        <select onChange={(event) => this.click4(event.target.value)} id="sizes" name="sizelist">
          {this.font.map(
            f =>
              <option value={f}>{f}</option>
          )}
        </select>
      </div>

    </div>
    );
  }
}

export default PerKey;

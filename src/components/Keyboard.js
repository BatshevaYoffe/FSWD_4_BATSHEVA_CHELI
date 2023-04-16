import React from 'react';
import Key from './Key';
import "./Key.css";

class Keyboard extends React.Component {

  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.click2 = this.click2.bind(this)

  }
  onclick(val) {
    this.props.func(val)

  }

  click2(val){
    this.props.func2(val)
  }
  render() {
    var arr = ["12", "14", "20"]
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var heb = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"]
    var engU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var engL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var characters = ["Delete", "Delete All", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "|", ";", ":", "/", "'", ",", "<", ">", ".", "?", "[", "]", "{", "}", "~"]
    var array = numbers
    array = array.concat(characters)
    if (this.props.lan == "english") {
      if (this.props.case === "lower") {
        array = array.concat(engL)
      }
      else {
        array = array.concat(engU)
      }
      // alert(array)
    }
    if (this.props.lan == "עברית") {
      array = array.concat(heb)

    }
    return (<div>
      <h2>Hi, I am a Keyboard!</h2>
      <div class="flex">
        {array.map((i, index) =>
          <div key={i.toString()}>
            <Key char={i} func={this.onclick} />
          </div>
        )}
      </div>
      <div>

        {/* <h2>chose size</h2>
        <div class="flex">
          {arr.map((i) =>
            <div key={i.toString()}>
              <Key char={i} func={this.onclick} />
            </div>
          )}</div> */}

        <h2>chose language</h2>
        <div class="flex">
          {/* <Key char={"עברית"} func={this.onclick} />
          <Key char={"english"} func={this.onclick} /> */}
          <Key char={"upper"} func={this.onclick} />
          <Key char={"upper-All"} func={this.onclick} />
          <Key char={"lower"} func={this.onclick} />
          <Key char={"lower-All"} func={this.onclick} />
          <Key char={"Undo"} func={this.click2} />
        </div>
      </div>
    </div>
    );
  }
}

export default Keyboard;

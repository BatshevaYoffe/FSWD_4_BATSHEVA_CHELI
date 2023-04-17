import React from 'react';
import Key from './Key';
import "./Key.css";

class Keyboard extends React.Component {
  RussianUppercase = new Array(32).fill(1).map((_, i) => String.fromCharCode(1040 + i));
  RussianLowercase = new Array(32).fill(1).map((_, i) => String.fromCharCode(1072 + i));
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
  }
  onclick(val) {
    this.props.func(val)

  }


  render() {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var heb = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"]
    var engU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var engL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var emoji = ['😀', "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", '😋', "😌", '😍', '😎', '😏', '😐', '😑', "😒", "😓", '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', "😩", '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '🙁', '🙂', '🙃', '🙄', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🤠', '🤡', '🤢', '🤣', '🤤', '🤥', '🤧', '🤨', '🤩', '🤪', '🤫', '🤬', '🤭', '🤮', '🤯', '🧐', '❤', '🌸', '🍓', '💞', '💯', '💗', '🔥']
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
    }
    if (this.props.lan == "עברית") {
      array = array.concat(heb)
    }
    if (this.props.lan === 'emoji') {
      array = (emoji)
    }
    if (this.props.lan === 'Russian') {
      if (this.props.case === "lower") {
        array = array.concat(this.RussianLowercase)
      }
      else {
        array = array.concat(this.RussianUppercase)
      }
    }


    return (<div>
      <div class="flex">
        {array.map((i, index) =>
          <div key={i.toString()}>
            <Key char={i} func={this.onclick} />
          </div>
        )}
      </div>
    </div>
    );
  }
}

export default Keyboard;

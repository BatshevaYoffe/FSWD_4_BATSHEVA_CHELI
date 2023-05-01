import React from 'react';
import Key from './Key';
import './css/Key.css';

class Keyboard extends React.Component {
  RussianUppercase = new Array(32).fill(1).map((_, i) => String.fromCharCode(1040 + i));
  RussianLowercase = new Array(32).fill(1).map((_, i) => String.fromCharCode(1072 + i));
  engL = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i));
  engU = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
  heb = new Array(27).fill(1).map((_, i) => String.fromCharCode(1488 + i));
  
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
  }
  onclick(val) {
    this.props.func(val)

  }


  render() {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var emoji = ['😀', "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", '😋', "😌", '😍', '😎', '😏', '😐', '😑', "😒", "😓", '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', "😩", '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '🙁', '🙂', '🙃', '🙄', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🤠', '🤡', '🤢', '🤣', '🤤', '🤥', '🤧', '🤨', '🤩', '🤪', '🤫', '🤬', '🤭', '🤮', '🤯', '🧐', '❤', '🌸', '🍓', '💞', '💯', '💗', '🔥']
    var characters = ['\t', "Delete", "Delete All", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "|", ";", ":", "/", "'", ",", "<", ">", ".", "?", "[", "]", "{", "}", "~"]
    var array = numbers
    array = array.concat(characters)

    if (this.props.lan == "english") {
      if (this.props.case === "lower") {
        array = array.concat(this.engL)
      }
      else {
        array = array.concat(this.engU)
      }
    }

    if (this.props.lan == "עברית") {
      array = array.concat(this.heb)
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
      <div class="flex Keyboard">
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

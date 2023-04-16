import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
import Color from "./Color";
import Size from './Size';
import Emoji from './Emoji';
let lastActions = []
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.onLanguageChange = this.onLanguageChange.bind(this)
    this.ChangeColor = this.ChangeColor.bind(this)
    this.ChangeSize = this.ChangeSize.bind(this)
    // this.fcolor = this.fcolor.bind(this)
    // this.onLanguageChange = this.onLanguageChange.bind(this);
    this.state = { value: "", language: "english", case: "lower", color: "black", size: "10px", array: [] };
  }
  lastActions = []
  lastcolors = ['black']
  lastsizes = ['10px']
  lastlanguages = ['english']
  undo() {
    // x=lastActions[lastActions.length()-1]
    let x='l'
    switch(x){
      case 'l':
        this.lastcolors=this.lastcolors.slice(-1)
        break;
      case 'c':
        break;
      case 's':
        break;

    }

  }
  onclick(val) {
    if (val != "Undo") {//נשמור לפי סדר את הפעולות כדי למחוק פעולה אחרונה
      lastActions.push(val)
    }
    let x = val
    switch (x) {//הפעולה שנבחרה
      case "Undo":
        this.undo()
        break;
      case " ":
        var style = { whiteSpace: "pre-wrap" };
        var a = { value: " ", style: style };
        this.setState({ array: [...this.state.array, a] })
        break;
      case "upper-All":
        this.state.array.forEach((item, index, arr) => (arr[index].value = item.value.toUpperCase()))
        this.setState(this.state);
        break;
      case "lower-All":
        this.state.array.forEach((item, index, arr) => (arr[index].value = item.value.toLowerCase()))
        this.setState(this.state);
        break;
      case "lower":
        this.setState({ case: x })
        break;
      case "upper":
        this.setState({ case: x })
        break;
      case "Delete":
        let l = this.state.array.splice(-1)
        this.setState({ array: this.state.array })
        break;
      case "Delete All":
        this.setState({ array: [] })
        break;
      case "red":
        this.setState({ color: "red" })
        break;
      case "blue":
        this.setState({ color: "blue" })
        break;
      case "black":
        this.setState({ color: "black" })
        break;
      case "12":
        this.setState({ size: "12px" })
        break;
      case "14":
        this.setState({ size: "14px" })
        break;
      case "20":
        this.setState({ size: "20px" })
        break;
      case "english":
        this.setState({ language: x })
        break;
      case "עברית":
        this.setState({ language: x })
        break;
      default:
        var style = { color: this.state.color, fontSize: this.state.size };

        var list = { value: val, style: style };
        this.setState({ array: [...this.state.array, list] })



    }
    // m = this.state.value
    // if (val === "red") {
    //   this.setState({ color: "red" })

    // }
    // else {
    //   if (val === "blue") {
    //     this.setState({ color: "blue" })
    //   }
    //   else
    //     if (val === "black") {
    //       this.setState({ color: "black" })

    //     }
    //     else {
    //       if (val === "english") {
    //         this.setState({ language: "english" })

    //       }
    //       else {
    //         if (val === "עברית") {
    //           this.setState({ language: "עברית" })
    //           // count2=
    //         }
    //         else
    //           if (val === "Delete") {
    //             alert("DELETE")
    //             var list = this.state.array.pop;
    //             alert(list)
    //             this.setState({ array: [list] })

    //           }
    //           else {
    //             if (val === " ") {
    //               alert(val)
    //               this.setState({ array: [...this.state.array, { value: " ", color: this.state.color }] })
    //             }

    //             if (count === 0) {
    //               this.setState({ array: [{ value: val, color: this.state.color }] }) //another array
    //               count = 1
    //               alert(count)
    //             }
    //             else {
    //               var list = { value: val, color: this.state.color };
    //               this.setState({ array: [...this.state.array, list] })
    //             }

    //             m += String(val)
    //             this.setState({ value: val })
    //       }
    //   }
    // }

    // }
  }
  onLanguageChange(lan) {
    this.lastActions=[...this.lastActions,'l']
    this.lastlanguages = [...this.lastlanguages, lan]
    this.setState({ language: lan })
  }

  ChangeColor(c) {
    this.lastActions=[...this.lastActions,'c']

    this.lastcolors = [...this.lastcolors, c]
    this.setState({ color: c })

  }
  ChangeSize(s) {
    this.lastActions=[...this.lastActions,'s']

    this.lastsizes = [...this.lastsizes, s]
    this.setState({ size: s })

  }

  render() {
    return (<div>
      <h2>Hi, I am a Content! </h2>
      <span><DisplayArea arr={this.state.array} /></span>
      <Keyboard lan={this.state.language} case={this.state.case} func={this.onclick} func2={this.lan1} />
      <Language onChange={this.onLanguageChange} /*func2={this.fcolor}*/ />
      <Color onChangeColor={this.ChangeColor} />
      <Size onChangeSize={this.ChangeSize} />
      <Emoji func={this.onclick}/>
    </div>
    );
  }
}

export default Content;

import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
import PerKey from "./PerKey"
let m = ""
let lan = "עברית";
let count = 0
let count2 = 0
let lastActions=[]
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.lan1 = this.lan1.bind(this)
    this.fcolor = this.fcolor.bind(this)

    this.state = { value: "", language: "english", case: "lower", color: "black", size: "10px", array: [] };
  }

  undo(){

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
        // var style= `color: ${this.state.color};size:${this.state.size};`;
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
  lan1(lan) {
    // alert(m)
    // alert(lan)
    // this.setState({language:lan})
  }
  fcolor(str) {
    // this.setState({color:str})
  }
  render() {
    return (<div>
      <h2>Hi, I am a Content! </h2>
      <span><DisplayArea arr={this.state.array} /></span>
      <Keyboard lan={this.state.language} case={this.state.case} func={this.onclick} />
      <Language func={this.lan1} /*func2={this.fcolor}*/ />
    </div>
    );
  }
}

export default Content;

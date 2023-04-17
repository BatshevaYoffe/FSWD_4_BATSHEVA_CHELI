import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
import Color from "./Color";
import Size from './Size';
import Emoji from './Emoji';
import PerKey from './PerKey';
// let lastActions = []
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.onLanguageChange = this.onLanguageChange.bind(this)
    this.ChangeColor = this.ChangeColor.bind(this)
    this.ChangeSize = this.ChangeSize.bind(this)
    this.change = this.change.bind(this)
    this.changeCase = this.changeCase.bind(this)
    this.changeFont = this.changeFont.bind(this)
    // this.fcolor = this.fcolor.bind(this)
    // this.onLanguageChange = this.onLanguageChange.bind(this);
    this.state = { value: "", st: 'normal', font: "Arial", language: "english", case: "lower", color: "black", size: "10px", array: [] };
  }
  lastActions = []
  lastst = ['normal']
  lastfont = ['Arial']
  lastCase = ['lower']
  lastcolors = ['black']
  lastsizes = ['10px']
  lastlanguages = ['english']

  undo() {
    // debugger
    let lastAction = this.lastActions.pop()
    console.log(lastAction);
    switch (lastAction) {
      case 'language':
        this.lastlanguages.pop()
        this.setState({ language: this.lastlanguages[this.lastlanguages.length - 1] })
        break;

      case 'color':
        this.lastcolors.pop()
        this.setState({ color: this.lastcolors[this.lastcolors.length - 1] })

        break;
      case 'size':
        this.lastsizes.pop()
        this.setState({ size: this.lastsizes[this.lastsizes.length - 1] })

        break;
      case 'char':
        this.state.array.pop()
        this.setState({ array: this.state.array })
        break
      case 'font':
        this.lastfont.pop()
        this.setState({ color: this.lastfont[this.lastfont.length - 1] })

        break;
      case 'st':
        this.lastst.pop()
        this.setState({ color: this.lastst[this.lastst.length - 1] })

        break;
      case 'case':
        this.lastCase.pop()
        this.setState({ color: this.lastCase[this.lastCase.length - 1] })

        break;

      default:
        this.onclick('Delete')


    }

  }
  onclick(val) {
    if (val !== "Undo") {//נשמור לפי סדר את הפעולות כדי למחוק פעולה אחרונה
      // this.lastActions.push(val)
      console.log(this.lastActions);
      // alert(this.lastActions)
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
      case "Delete":
        let l = this.state.array.splice(-1)
        this.setState({ array: this.state.array })
        break;
      case "Delete All":
        this.setState({ array: [] })
        break;
      default:
        this.lastActions.push('char')

        var style = { color: this.state.color, fontSize: this.state.size, fontStyle: this.state.st, fontFamily: this.state.font };

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
    // this.lastActions=[...this.lastActions,'l']
    this.lastActions.push('language')
    this.lastlanguages = [...this.lastlanguages, lan]
    this.setState({ language: lan })
  }

  ChangeColor(c) {
    this.lastActions.push('color')
    this.lastcolors = [...this.lastcolors, c]
    console.log(this.lastcolors);
    this.setState({ color: c })

  }
  ChangeSize(s) {
    s += 'px'
    this.lastActions.push('size')
    this.lastsizes = [...this.lastsizes, s]
    this.setState({ size: s })

  }
  change(val) {
    this.lastActions.push('st')
    this.lastst.push(val)
    this.setState({ st: val })
  }
  changeCase(val) {
    this.lastActions.push('case')
    this.lastst.push(val)
    this.setState({ case: val })
  }
  changeFont(val) {
    this.lastActions.push('font')
    this.lastst.push(val)
    this.setState({ font: val })
  }

  render() {
    return (<div>
      <h2>Hi, I am a Content! </h2>
      <span><DisplayArea arr={this.state.array} /></span>
      <Keyboard lan={this.state.language} case={this.state.case} func={this.onclick} func2={this.onclick} />
      <Language onChange={this.onLanguageChange} /*func2={this.fcolor}*/ />
      <Color onChangeColor={this.ChangeColor} />
      <Size onChangeSize={this.ChangeSize} />
      {/* <Emoji func={this.onclick} /> */}
      <PerKey func={this.onclick} func2={this.change} func3={this.changeCase} func4={this.changeFont} />
    </div>
    );
  }
}

export default Content;

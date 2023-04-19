import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
import Color from "./Color";
import Size from './Size';
import PerKey from './PerKey';
import './Content.css'
import ChangeAll from './ChangeAll';
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
    this.ChangeAll=this.ChangeAll.bind(this)
    this.ChangeAllColor=this.ChangeAllColor.bind(this)

    this.state = { value: "", st: 'normal',bold:'normal', font: "Arial", language: "english", case: "lower", color: "black", size: "10px",changeAll:'false', array: [] };
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
        console.log(this.state.language);

        this.setState({ language: this.lastlanguages[this.lastlanguages.length - 1] })
        console.log(this.state.language);
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
        console.log(this.lastst)
        this.lastst.pop()
        this.setState({ color: this.lastst[this.lastst.length - 1] })

        break;
      case 'case':
        this.lastCase.pop()
        this.setState({ color: this.lastCase[this.lastCase.length - 1] })

        break;

      default:
        // this.onclick('Delete')


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
        console.log("רווחחח");
        var style = { color: this.state.color, fontSize: this.state.size, fontStyle: this.state.st, fontFamily: this.state.font,whiteSpace: "pre-wrap" };
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

        var style = { color: this.state.color, fontSize: this.state.size, fontStyle: this.state.st,fontweight:this.state.bold, fontFamily: this.state.font };

        var list = { value: val, style: style };
        this.setState({ array: [...this.state.array, list] })



    }
  }
  onLanguageChange(lan) {
    // this.lastActions=[...this.lastActions,'l']
    this.lastActions.push('language')
    this.lastlanguages = [...this.lastlanguages, lan]
    this.setState({ language: lan })
  }

  ChangeColor(c) {
    this.lastActions.push('color')
    console.log(this.lastcolors);

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
    console.log(this.lastst);
    this.lastActions.push('st')
    this.lastst.push(val)
    console.log(this.lastst);

    this.setState({ st: val })
  }
  changeCase(val) {
    this.lastActions.push('case')
    this.lastCase.push(val)
    this.setState({ case: val })
  }
  changeFont(val) {
    this.lastActions.push('font')
    this.lastfont.push(val)
    this.setState({ font: val })
  }
  ChangeAll(val){
    console.log(val);
    this.setState({changeAll:val})
    console.log(this.state.changeAll);
    this.ChangeAllColor('red')
  }
  ChangeAllColor(c){
    this.state.array.forEach((item, index, arr) => (arr[index].style.color=c))


  }

  render() {
    return (<div className='content'>
      <DisplayArea arr={this.state.array} />
      <div class='grid-container'>
        <div class='item1'><Keyboard lan={this.state.language} case={this.state.case} func={this.onclick} func2={this.onclick} /></div>
        <div class='item2'><Language onChange={this.onLanguageChange} /></div>

        <div ><ChangeAll onChangeAll={this.ChangeAll} /></div>

        <div class='item3'><Color onChangeColor={this.ChangeColor} /></div>
        <div class='item4'><Size onChangeSize={this.ChangeSize} /></div>
        <div class='item5'><PerKey st={this.state.st} func={this.onclick} func2={this.change} func3={this.changeCase} func4={this.changeFont} /></div>
      </div>
    </div>
    );
  }
}

export default Content;

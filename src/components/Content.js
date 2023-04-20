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
    this.ChangeAll = this.ChangeAll.bind(this)
    this.ChangeAllColor = this.ChangeAllColor.bind(this)
this.changeBold=this.changeBold.bind(this)

    this.state = {
      colorAll: '', value: "", st: 'normal', bold: 'normal', font: "Arial", language: "english",
      case: "lower", color: "black", size: "10px", changeAll: 'false', array: [],history:[]
    };
  }
  arrayChangeAll = []
  lastActions = []
  lastst = ['normal']
  lastbold=['normal']
  lastfont = ['Arial']
  lastCase = ['lower']
  lastcolors = ['black']
  lastsizes = ['10px']
  lastlanguages = ['english']
  colorAll = []

  lastarray=[]
  async undo() {
    // debugger
    let lastAction = this.lastActions.pop()
    console.log(lastAction);
    switch (lastAction) {
      case 'language':
        this.lastlanguages.pop()
        console.log(this.state.language);
        await this.setState({ language: this.lastlanguages[this.lastlanguages.length - 1] })
        console.log(this.state.language);
        break;
      case 'color':
        this.lastcolors.pop()
        await this.setState({ color: this.lastcolors[this.lastcolors.length - 1] })
        break;
      case 'size':
        this.lastsizes.pop()
        await this.setState({ size: this.lastsizes[this.lastsizes.length - 1] })
        break;
      case 'char':
        this.state.array.pop()
        await this.setState({ array: this.state.array })
        break
      case 'font':
        this.lastfont.pop()
        await this.setState({ font: this.lastfont[this.lastfont.length - 1] })
        break;
      case 'st':
        console.log(this.lastst)
        this.lastst.pop()
        await this.setState({ st: this.lastst[this.lastst.length - 1] })
        break;
      case 'case':
        this.lastCase.pop()
        await this.setState({ case: this.lastCase[this.lastCase.length - 1] })
        break;
        case 'bold':
        this.lastbold.pop()
        await this.setState({ bold: this.lastbold[this.lastbold.length - 1] })
        break;
      case 'colorAll':
        this.lastarray=this.arrayChangeAll.pop()
        console.log(this.lastarray);

        this.setState({array:this.lastarray})
        break;
        case 'fontAll':
          this.setState({array:this.state.history})
          break;

    }

  }
  onclick(val) {
    let x = val
    switch (x) {//הפעולה שנבחרה
      case "Undo":
        this.undo()
        break;
      case " ":
        this.lastActions.push('char')
        var style = { color: this.state.color, fontSize: this.state.size, fontStyle: this.state.st, fontFamily: this.state.font, whiteSpace: "pre-wrap" };
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
        var style = { color: this.state.color, fontSize: this.state.size, fontStyle: this.state.st, fontWeight: this.state.bold, fontFamily: this.state.font };
        var list = { value: val, style: style };
        this.setState({ array: [...this.state.array, list] })
    }
  }
  async onLanguageChange(lan) {
    // this.lastActions=[...this.lastActions,'l']
    this.lastActions.push('language')
    this.lastlanguages = [...this.lastlanguages, lan]
    await this.setState({ language: lan })
  }

  async ChangeColor(c) {
    if (this.state.changeAll === 'true') {
      this.ChangeAllColor(c)
    }
    else {
      this.lastActions.push('color')
      this.lastcolors = [...this.lastcolors, c]
      await this.setState({ color: c })
    }

  }
  async ChangeSize(s) {
    s += 'px'
    this.lastActions.push('size')
    this.lastsizes = [...this.lastsizes, s]
    await this.setState({ size: s })
  }
  async change(val) {
    this.lastActions.push('st')
    this.lastst.push(val)
    await this.setState({ st: val });
    console.log(this.state.st);
  }
  async changeCase(val) {
    this.lastActions.push('case')
    this.lastCase.push(val)
    await this.setState({ case: val })
  }
  async changeFont(val) {
    if (this.state.changeAll === 'true') {
      this.ChangeAllFont(val)
    }
    else {
    this.lastActions.push('font')
    this.lastfont.push(val)
    await this.setState({ font: val })
    }
  }
  async changeBold(val) {
    // if (this.state.changeAll = 'true') {
    //   // this.ChangeAllFont(val)
    // }
    // else {
    console.log('bold')
    this.lastActions.push('bold')
    this.lastbold.push(val)
    await this.setState({ bold: val })
    // }
  }
  async ChangeAll(val) {
    await this.setState({ changeAll: val })
    console.log(this.state.changeAll);
  }
  async ChangeAllColor(c) {
    this.lastActions.push('colorAll')
    await this.setState({ colorAll: c })
    this.colorAll.push(c)
    this.state.array.forEach((item, index, arr) => {
      arr[index].style = { color: c, fontSize: arr[index].style.fontSize, fontStyle: arr[index].style.st, fontweight: arr[index].style.bold, fontFamily: arr[index].style.font }
    }
    )
    this.setState(this.state.array)
  }
  async ChangeAllFont(f) {
    console.log('fontalll');
    this.lastActions.push('fontAll')
    // await this.setState({ fontAll: f })
    // this.fontAll.push(f)
    this.setState({history:this.state.array})
    this.state.array.forEach((item, index, arr) => {
      arr[index].style = { color: arr[index].style.fontSize, fontSize: arr[index].style.fontSize, fontStyle:arr[index].style.fontStyle , fontWeight: arr[index].style.fontWeight, fontFamily: f }
    }
    )
    await this.setState(this.state.array)
  }

  render() {
    return (<div className='content'>
      <DisplayArea arr={this.state.array} />
      <div class='grid-container'>
        <div class='item1'><Keyboard lan={this.state.language} case={this.state.case} func={this.onclick} func2={this.onclick} /></div>
        <div class='item2'><Language onChange={this.onLanguageChange} /></div>
        <div class='item6'><ChangeAll onChangeAll={this.ChangeAll} /></div>
        <div class='item3'><Color onChangeColor={this.ChangeColor} /></div>
        <div class='item5'><Size onChangeSize={this.ChangeSize} /></div>
        <div class='item4'><PerKey st={this.state.st} func={this.onclick} func2={this.change} func3={this.changeCase} func4={this.changeFont} func5={this.changeBold} /></div>
      </div>
    </div>
    );
  }
}

export default Content;

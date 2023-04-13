import React from 'react';
import DisplayArea from "./DisplayArea";
import Keyboard from "./Keyboard";
import Language from './Language';
import PerKey from "./PerKey"
let m = ""
let lan = "עברית";

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.lan1 = this.lan1.bind(this)
    this.fcolor = this.fcolor.bind(this)

    this.state = { value: "", language: "english", color: "black" };
  }
  onclick(val) {
    m = this.state.value
    if (val === "red") {
      this.setState({ color: "red" })

    }
    else {
      if (val === "blue") {
        this.setState({ color: "blue" })
      }
      else
        if (val === "black") {
          this.setState({ color: "black" })

        }
        else {
          if (val === "english") {
            this.setState({ language: "english" })

          }
          else {
            if (val === "עברית") {
              this.setState({ language: "עברית" })

            }
            else
              if (val === "Delete") {
                alert("DELETE")

              }
              else{
                m += String(val)
                this.setState({ value: val })
              }
          }
        }

    }
    // alert(this.state.language)
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
      <span><DisplayArea v={this.state.value} c={this.state.color} /></span>
      <Keyboard lan={this.state.language} func={this.onclick} />
      <Language func={this.lan1} /*func2={this.fcolor}*/ />
      {/* <PerKey func={this.onclick} /> */}
    </div>
    );
  }
}

export default Content;

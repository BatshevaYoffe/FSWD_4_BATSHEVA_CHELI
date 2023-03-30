import React from 'react';
import Key from './Key';
var array = [1, 2, 3, 4, 5, 6]
var heb=["א","ב","ג","ד","ה","ו"]
var eng=["A","B","C","D"]
var language=array
class Keyboard extends React.Component {
  
  constructor(props){
    super(props)
    this.onclick=this.onclick.bind(this)
  }
  onclick(val){
    // alert(val)
    this.props.func(val)

  }
  render() {
    return (<div>
      <h2>Hi, I am a Keyboard!</h2>
      <div>
        {array.map((language) =>
          <div key={language.toString()}>
            <Key char={language} func={this.onclick} />
          </div>
        )}
        
      </div>
    </div>
    );
  }
}

export default Keyboard;

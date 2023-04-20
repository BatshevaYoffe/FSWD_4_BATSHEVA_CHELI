import React from 'react';
import Key from './Key';
class Emoji extends React.Component {
    emoji = ['😀', "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", '😋', "😌", '😍', '😎', '😏', '😐', '😑', "😒", "😓", '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', "😩", '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '🙁', '🙂', '🙃', '🙄', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🤠', '🤡', '🤢', '🤣', '🤤', '🤥', '🤧', '🤨', '🤩', '🤪', '🤫', '🤬', '🤭', '🤮', '🤯', '🧐', '❤', '🌸', '🍓', '💞', '💯', '💗', '🔥']
    constructor(props) {
        super(props)
        this.onclick = this.onclick.bind(this)
    }

    onclick(val) {
        this.props.func(val)
    
      }

    // getAnimalsContent = () => {
    //     let content = [];
    //     for (let i = 128512; i != 129488; i++) {
    //         let m='&#'.concat(String({i}))
    //         content.push(<li key={i}>{m}</li>);
    //     }
    //     return content;
    //   };
    render() {
        return (<div>
            <h4>Chose Emoji:</h4>
            <div class="flex">
                {this.emoji.map((i, index) =>
                    <div key={i.toString()}>
                        <Key char={i} func={this.onclick} />
                    </div>
                )}
            </div>
        </div>);
    }
}
export default Emoji;


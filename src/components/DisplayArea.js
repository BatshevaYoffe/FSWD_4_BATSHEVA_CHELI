
import React from 'react';
import './Key.css';

class DisplayArea extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.arr);
        return (<div>
            <h2>Hi, I am a DisplayArea!</h2>
            <p class="flex">
                {this.props.arr.map((i, index) =>
                    <p><span style={this.props.arr[index].style}>{this.props.arr[index].value}</span></p>

                    // <span style={{ color: this.props.arr[index].color, fontSize: (this.props.arr[index].siz) }}>{this.props.arr[index].value}</span>
                )}
            </p>
        </div>);
    }
}
export default DisplayArea;



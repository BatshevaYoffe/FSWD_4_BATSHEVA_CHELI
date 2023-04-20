
import React from 'react';
import './Key.css';

class DisplayArea extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.arr);
        return (
            <div className='border'>
                <div style={{ overflow: 'auto' }} className="flex">
                    <p >
                        {this.props.arr.map((i, index) => 
                            (this.props.arr[index].value === '\t')?
                            <br/>
                            :
                                <span style={this.props.arr[index].style}>{this.props.arr[index].value}</span>
                        )
                        }
                    </p>
                </div>
            </div>
        );
    }
}
export default DisplayArea;



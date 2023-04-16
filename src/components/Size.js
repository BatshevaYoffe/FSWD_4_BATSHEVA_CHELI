import React from 'react';
class Size extends React.Component {
    arr = ["12", "14", "20"]

    constructor(props) {
        super(props)
        this.changeSize = this.changeSize.bind(this)
    }

    changeSize(color) {
        this.props.onChangeSize(String(color));
    }

    render() {
        return (<div>
            <h2>chose size</h2>
            <div class="flex">
                {this.arr.map(
                    color =>
                        <button onClick={() => this.changeSize(color)}>
                        </button>
                )}
            </div>
            <label for="cars">Choose a Size:</label>
            <select id="sizes" name="sizelist">
            {this.arr.map(
                    color =>
                    <option on={()=>this.changeSize(color)} value={color}>{color}</option>
                )}
            </select>

        </div>)
    }
}
export default Size;


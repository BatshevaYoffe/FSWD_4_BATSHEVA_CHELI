import React from 'react';
class Size extends React.Component {
    arr = ['10',"12", "14", "20",'28','48','72']

    constructor(props) {
        super(props)
        this.changeSize = this.changeSize.bind(this)
    }

    changeSize(size) {
        this.props.onChangeSize(String(size));
    }

    render() {
        return (<div>
            {/* <h2>chose size</h2>
            <div class="flex">
                {this.arr.map(
                    size =>
                    <div key={size.toString()}>
                        <button onClick={() => this.changeSize(size)}>
                        </button>
                        </div>
                )}
            </div> */}
            <label for="cars">Choose a Size:</label>
            <select onChange={(event)=>this.changeSize(event.target.value)} id="sizes" name="sizelist">
            {this.arr.map(
                    size =>
                    // <div key={size}>
                    <option value={size}>{size}</option>
                    // </div>
                )}
            </select>

        </div>)
    }
}
export default Size;


import React from 'react';
import './Key.css'
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
            <label for="cars">Choose a Size: </label>
            <select class='key-button item' onChange={(event)=>this.changeSize(event.target.value)} id="sizes" name="sizelist">
            {this.arr.map(
                    size =>
                    <option style={{backgroundColor:'white',color:'black' }} value={size}>{size}</option>
                )}
            </select>
        </div>)
    }
}
export default Size;


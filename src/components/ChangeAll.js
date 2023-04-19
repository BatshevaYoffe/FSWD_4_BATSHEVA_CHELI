import React from 'react';
class ChangeAll extends React.Component {

    constructor(props) {
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this)

    }

    onChangeValue(event) {
        console.log(event.target.value);
        this.props.onChangeAll(event.target.value);
    }

    render() {
        return (<div onChange={this.onChangeValue}>
            <input type="radio" value="false" name="all" /> change style only for the next char
            <input type="radio" value='true' name="all" /> change style for all the txt


        </div>)
    }
}
export default ChangeAll;


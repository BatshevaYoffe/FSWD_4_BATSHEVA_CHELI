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
            <div><input type="radio" id='one' value="false" name="all" /><label for='one'> change style only for the next char</label></div>
            <div><input type="radio" id='all' value='true' name="all" /><label for='all'> change style for all the txt</label></div>


        </div>)
    }
}
export default ChangeAll;


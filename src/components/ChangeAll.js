import React from 'react';
class ChangeAll extends React.Component {

    constructor(props) {
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    onChangeValue(event) {
        this.props.onChangeAll(event.target.value);
    }

    render() {
        return (<div onChange={this.onChangeValue}>
            <div><input type="radio" id='one' value="false" name="all" /><label for='one'> Style change only to the next character</label></div>
            <div><input type="radio" id='all' value='true' name="all" /><label for='all'> Style change to all the characters</label></div>
        </div>)
    }
}
export default ChangeAll;


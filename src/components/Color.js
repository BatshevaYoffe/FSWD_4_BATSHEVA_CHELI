import React from 'react';
import './Color.css';
class Color extends React.Component {
    colors = ['red', 'black', 'blue', 'Magenta', 'Cyan', "Yellow", "Gray", "Green", "DarkOrange", "HotPink", "#990000", "#cc3399", "#ffffff", "#6699ff", "#999966", "#666699",'Aqua','Lime','Olive','Teal','Indigo','Violet','Pink','Brown','Sienna','Crimson','bisque','blueviolet','burlywood','chartreuse','cadetblue','chocolate','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkred','darksalmon','darkseagreen','darkslateblue','darkslategrey','deeppink','gainsboro','gold','goldenrod','khaki','lavender','lavenderblush','lightgoldenrodyellow','lightsalmon'];

    constructor(props) {
        super(props)
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(color) {
        this.props.onChangeColor(String(color));
    }

    render() {
        return (<div>
            <h4>Chose color:</h4>
            <div class='flex'>
                {this.colors.map(
                    color => 
                    <div  key={color}>

                        <button style={{ backgroundColor: color }} className='colorBtn' onClick={() => this.changeColor(color)}>
                        </button>
                    </div>
                )}
            </div>
        </div>);
    }
}
export default Color;


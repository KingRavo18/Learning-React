import React, {useState} from "react";
import "./ColorPicker.css"

export default function ColorPicker(){

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className="colorPicker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: <br/> {color}</p>
            </div>
            <div className="color-picker">
                <p>Select a Color:</p>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </div>
    );
}
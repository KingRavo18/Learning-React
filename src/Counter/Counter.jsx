import "./Counter.css";
import React, {useState} from "react";

export default function Counter() {

    const [number, setNumber] = useState(0);
    const [valueToIncrement, setValueToIncrement] = useState(1);
    const [warning, setWarning] = useState("");

    const handleValueToIncrement = (event) => setValueToIncrement(Number(event.target.value));

    const incrementNumber = () => {
        setNumber(n => n + valueToIncrement);
        setWarning("");
    }

    const decrementNumber = () => {
        if(number - valueToIncrement > -1){
            setNumber(n => n - valueToIncrement);
        }else{
            setNumber(0);
            setValueToIncrement(1);
            setWarning("Cannot decrement below 0");
        }
    }

    const resetNumber = () => {
        setNumber(0);
        setValueToIncrement(1);
        setWarning("");
    }

    return(
        <div className="counter-container">
            <p>{number}</p>
            <label>
                Change value by:
                <input type="number" value={valueToIncrement} min="1" onChange={handleValueToIncrement}/>
            </label>
            <span>{warning}</span>
            <div className="button-container">
                <button onClick={decrementNumber}>Decrement</button>
                <button onClick={resetNumber}>Reset</button>
                <button onClick={incrementNumber}>Increment</button>
            </div>
        </div>
    );
}
//Make the number turn green/red briefly when incremented/decremented, or animate the change with CSS transitions.
//Allow ↑/↓ or +/– keys to increment/decrement.
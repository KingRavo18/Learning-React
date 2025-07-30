import "./Counter.css";
import React, {useState} from "react";

export default function Counter() {

    const [number, setNumber] = useState(0);

    const incrementNumber = () => setNumber(n => n + 1);
    const decrementNumber = () => setNumber(n => n - 1);
    const resetNumber = () => setNumber(0);

    return(
        <div className="counter-container">
            <p>{number}</p>
            <div className="button-container">
                <button onClick={decrementNumber}>Decrement</button>
                <button onClick={resetNumber}>Reset</button>
                <button onClick={incrementNumber}>Increment</button>
            </div>
        </div>
    );
}
//Allow users to choose how much to increment/decrement by:
//Disable Decrement Below Zero (if desired)
//Make the number turn green/red briefly when incremented/decremented, or animate the change with CSS transitions.
//Allow ↑/↓ or +/– keys to increment/decrement.
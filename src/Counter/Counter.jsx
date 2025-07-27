import React, {useState} from "react";
import "./Counter.css";

export default function Counter() {

    const [number, setNumber] = useState(0);

    const DecrementNumber = () => {
        setNumber(n => n - 1);
        setNumber(n => n - 1);
        setNumber(n => n - 1);
    }

    const ResetNumber = () => {
        setNumber(0);
    }

    const IncrementNumber = () => {
    
        // Uses the CURRENT state to calculate the NEXT state.
        // Set functions do not trigger an update
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
    }

    return(
        <div className="Counter">
            <div className="counterDisplay">
                <p>{number}</p>
            </div>
            <div className="CounterButtonDiv">
                <button onClick={DecrementNumber}>Decrement</button>
                <button onClick={ResetNumber}>Reset</button>
                <button onClick={IncrementNumber}>Increment</button>
            </div>
        </div>
    );
}
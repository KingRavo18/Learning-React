import React, {useState} from "react";
import "./Counter.css";

export default function Counter() {

    const [number, setNumber] = useState(0);

    const DecrementNumber = () => {
        setNumber(number - 1);
    }

    const ResetNumber = () => {
        setNumber(0);
    }

    const IncrementNumber = () => {
        setNumber(number + 1);
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
import React, {useState} from "react";

export default function RandomNumGenerator(){
    const [minNumber, setMinNumber] = useState("");
    const [maxNumber, setMaxNumber] = useState("");
    const [randomNumber, setRandomNumber] = useState("");

    const getMinNumber = (event) => setMinNumber(Number(event.target.value));
    const getMaxNumber = (event) => setMaxNumber(Number(event.target.value));
    
    function generateNumber() {
        maxNumber > minNumber ? setRandomNumber(Math.round(Math.random() * (maxNumber - minNumber)) + minNumber) : setRandomNumber("Invalid");
        setMinNumber("");
        setMaxNumber("");
    }

    return(
        <div>
            <h1>Random Number Generator</h1>
            <p>Generate: {randomNumber}</p>
            <label>
                Minimum: 
                <input type="number" value={minNumber} onChange={getMinNumber} min="0"/>
            </label><br/>
            <label>
                Maximum:
                <input type="number" value={maxNumber} onChange={getMaxNumber} min="0"/>
            </label><br/>
            <button onClick={generateNumber}>Generate</button>
        </div>
    );
}

//Improvements:
//Types in State;
//Rounding Issue;
//Avoid Resetting on Error;
//Add Feedback UI
// useEffect() = React Hook that tells Teact DO SOME CODE (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])      // Runs only on mount / on page reload
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipluation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

export default function UseEffect(){
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue");

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);  
    /*
    useEffect(() => {
        document.title = `Count ${count} ${color}`;

        return () => {
            // SOME CLEANUP CODE
        }

    }, [count, color]);
    */

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, [])

    useEffect(() => {
        document.title = `Width ${width} Height ${height}`;
    }, [width, height])

    function handleAddCount() {
        setCount(c => c + 1);
    }

    function handleSubtractCount() {
        setCount(c => c - 1);
    }

    function handleChangeColor() {
        setColor(c => c === "blue" ? "red" : "blue");
    }

    function handleResize() {
        setWidth(innerWidth);
        setHeight(innerHeight);
    }


    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={handleAddCount}>Add</button>
            <button onClick={handleSubtractCount}>Subtract</button> <br/>
            <button onClick={handleChangeColor}>Change Color</button>

            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    );
}
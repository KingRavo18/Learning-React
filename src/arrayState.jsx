import React, {useState} from "react";

export default function Array_State() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
        
    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        //setFoods([newFood]); if this line is activated, the new value replaces every other value in the array
        setFoods(f => [...f, newFood]);
    }
    // filter() = built-in array function 
    // if a parameter of a function is not used, use an _
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <br/>
            <button onClick={handleAddFood}>Add Food Item</button>
        </div>
    );
}
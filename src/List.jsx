
function List(props) {

    const category = props.category;
    const itemList = props.items;
                    {/* Objects */}
    /*
    const fruits = [{id:1, name:"apple", calories:95}, 
                    {id:2, name:"orange", calories:45}, 
                    {id:3, name:"banana", calories:105}, 
                    {id:4, name:"pinapple", calories:37}, 
                    {id:5, name:"lemon", calories:12}];
    */

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical

    //fruits.sort((a, b) => a.calories - b.calories); //Numeric order
    //fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric order

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 90);


    {/* For every fruit in the array fruits, make list item with a fruit inside */}

    const listItems = itemList.map(item => 
                                <li key={item.id}>
                                    {item.name}: &nbsp; <b>{item.calories}</b>
                                </li>);
    
    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
export default List
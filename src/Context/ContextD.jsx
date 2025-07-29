import React, {useContext} from "react";
import {UserContext} from "./ContextA.jsx";

export default function ContextD() {

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ContextD</h1>
            <h2>{user}</h2>
        </div>
    );
}
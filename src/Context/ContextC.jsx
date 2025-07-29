import ContextD from "./ContextD";
import React, {useContext} from "react";
import {UserContext} from "./ContextA.jsx";

export default function ContextC() {

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ContextC</h1>
            <h2>{user}</h2>
            <ContextD />
        </div>
    );
}
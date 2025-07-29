//useContext() = React Hook that allows you to share values between
//               multiple levels of components without passing props
//               through each level

//PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child />
//    </MyContext.Provider>

//CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);

import React, {useState, createContext} from "react";
import ContextB from "./ContextB";

export const UserContext = createContext();

export default function ContextA() {

    const [user, setUser] = useState("KingR");

    return(
        <div className="box">
            <h1>ContextA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ContextB />
            </UserContext.Provider>
        </div>
    );
}
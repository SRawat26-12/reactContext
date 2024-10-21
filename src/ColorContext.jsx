import {createContext,useState} from "react";
const myContext=createContext();
const ColorContext=({children})=>{
    const [clr,setClr]=useState("green");
    return(
        <>
        <myContext.Provider value={{clr,setClr}}>
            {children}
        </myContext.Provider>
        
        </>
    )
}
export default ColorContext;
export{myContext};
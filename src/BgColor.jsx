import { useContext,useState } from "react";
import { myContext } from "./ColorContext";
const BgColor=()=>{
    const {clr,setClr}=useContext(myContext);
    const [txtval,setTxtVal]=useState("");
    return(
        <>
        <h1>Change background Color</h1>
        Enter any color:
        <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/>
        <button onClick={()=>{setClr(txtval)}}>Change Color</button>
        <div style={{width:"300px",height:"200px",backgroundColor:clr}}>

        </div>
        </>
    )
}
export default BgColor;
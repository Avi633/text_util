import React, { useState } from 'react'









export default function Textform(props) {
  const myStyle=()=>{
   if(props.mode==="light"){
     return "black";
   }else{
   return "white";
   }
  }
 
const [ text , setText ]= useState("");

  

  const handelupclick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    
    setText(newText);
}
const handelloclick = () => {
  console.log("Uppercase was clicked");
  let newText = text.toLowerCase();

  setText(newText);
}
const handleclear = () => {
  console.log("Uppercase was clicked");
  let newText = "";

  setText(newText);
  
}
 
  
  return (
   <>
   
<div className=" container mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label ">{props.heading}</label>
  <textarea className="form-control "  style={  {backgroundcolor:{myStyle} }  }id="exampleFormControlTextarea1" rows={props.ro} value={text} onChange={(e)=>setText(e.target.value)} ></textarea>
  <button className="btn btn-primary me-2" onClick={handelupclick}  >Convert to Uppercase</button>
  <button className='btn btn-primary me-2' onClick={handelloclick} >convert to lowercase</button>
  <button className='btn btn-primary me-2' onClick={handleclear}>clear</button>
  
</div>
<div>
  <p>{text.length} are the no of character and {text.split(" ").length} are the no of words</p>
</div>
    
  
   </>
   

  )
  
  
}



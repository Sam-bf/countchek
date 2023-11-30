import { useState } from "react";
import Counter from "./counter";
import Test from "./Show";
import './App.css'
function App() {
 const [hdshow,setHdshow]=useState(false)

 const handelShow =()=>{
setHdshow(!hdshow)

  }
 

  return (
    <div>
<button onClick={handelShow}>{hdshow?"hide profile":"showprofile"}</button>
{hdshow && 


  <Test/> 




}





    </div>
  );
}

export default App;

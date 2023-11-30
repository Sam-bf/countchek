import { useEffect, useState } from "react"
const Test=()=> {
    const[name, setName]=useState("Sam")
    const[bio, setBio]=useState("Male")
    const[profession, setProfession]=useState("pharm")
    const[timer,setTimer]=useState(0)
    
    
    const handelTime=()=>{
        setInterval(()=>setTimer(timer + 1),1000)
    }
    useEffect(() => {
        handelTime()
      }, [timer]);

return (
    <>
  
    <h1>hello i'm {name} </h1>
<p> i'm a {bio} and i work as a {profession}</p>
<p>{timer}</p>
    </>
)
}
export default Test
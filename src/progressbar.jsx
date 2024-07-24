import { useEffect, useState } from 'react'
import './index.css'


function Loader() {
    const[count, setCount] = useState(0);
    const[message, setMessage] = useState("Loading...");


    useEffect(() => {
      let timerId = null;
      if(count < 100){
        timerId = setInterval(() => {
          setCount((val) => val+1);
        }, 100);
      }
      if(count === 50){
        setMessage("Please wait it is loading...")
      }
      if(count === 100){
        setMessage("Loaded successfully. 🎉");
      }
      return ()=> clearInterval(timerId);
      
    },[count]);
    
    
  return (
    <div className= "container">
      <div className="loader">
        <div className="loader_count" style={{width: `${count}%`}}>{count}%</div>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Loader;
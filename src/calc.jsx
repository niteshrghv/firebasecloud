import { useState } from "react";
import axios from 'axios';




const SquareCalculator = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  
  const calculateSquare=()=>{
    axios.post('http://127.0.0.1:5001/nitesh-93bb6/us-central1/myFunction',{num:number}).then((r)=>{
      
      console.log("api called");
      setResult(r.data)}).catch((e)=>{console.log(e)});
      console.log("result recieved");
  }
  
    return (
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={calculateSquare}>Calculate Square</button>
        {<p>Square: {result}</p>}

      </div>
    );
  };

export default SquareCalculator;
  

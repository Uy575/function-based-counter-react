import React, { useState } from 'react';
import './App.css';
import Increment from './components/increment.component';

function App() {
  const [counter,setCounter] = useState(0)
  return (
    <div className="App">
      <h1>{counter}</h1>

      <Increment handler = {()=>{
          setCounter(counter+1)
        }} dechandler = {()=>{
          if(counter!==0){
            setCounter(counter-1);
          }
        }} />
      
    </div>
  );
}

export default App;
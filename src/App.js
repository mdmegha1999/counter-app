import logo from './logo.svg';
import React,{useState} from 'react'

import './App.css';

function App() {
  const [num, setNum]=useState(0);
  const increment = ()=>{
      setNum(num +1)
  }
  const decrement =()=>{
      setNum(num -1)
  }
  const clear =()=>{
    setNum(0)
  }
  return (
    <div className="App">
       <div>
          <h1 className='header'>Counter-App</h1>
      </div>
       <div className='coun'>
              
              <button className='number'>{num}</button><br/>
              <button className='less' onClick={decrement}>-</button>
              <button className='gretar' onClick={increment}>+</button><br/>
              <button className='clear' onClick={clear}>Clear</button>
          </div>
    </div>
  );
}

export default App;


import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  const [count, setcount] = React.useState(0)
  function increasevalue(num){
    if (count < 20){
      setcount(count + num) 
    } else {
      alert("Value Maxed out")
    }
  }
  return (
  <button onClick={() => increasevalue(5)} >
    {count}
  </button>
  )
}


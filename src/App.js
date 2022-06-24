import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './App.css'
function App() {
  const [quote,setQuote]=useState('');
 
  useEffect(()=>{
   fetchQuote()
  },[])

  
  const fetchQuote=()=>{
    axios.get('https://api.adviceslip.com/advice').then((response)=>{
    console.log(response.data.slip.advice);
    setQuote(response.data.slip.advice)
    }
  )
}
 
  return (
    <div className='container'>
      <span className='item'><h2 className='font'>{quote}</h2><button onClick={()=>{
        fetchQuote()
      }} className='glow-on-hover'>click me</button><div></div></span>
    </div>
  )
}

export default App
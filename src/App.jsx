import React, { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [value, setvalue] = useState()
  const [author, setauthor] = useState()
  const clickhere=async()=>{
  
   let url="https://qapi.vercel.app/api/random"
   try{
    const datas=await axios.get(url);
    setvalue(datas.data.quote);
    setauthor(datas.data.author)
   }catch(error){
    console.log(error,"you dissapoa");
    
   }
  
  
 }
  return (
    <div className='container'>
      <h1 className='heading'>Motivating Quotes</h1>
      <div className='click button'><h5>ITS Now Your Time</h5>
      <button className='button' onClick={clickhere} >Click me</button>
      <div>
      <h2 className='quotes heading'> </h2>
      <p>{value}</p>
      </div>
      <div>
      <h3>Author: </h3>
      <p>{author}</p>
      </div>
      </div>
    </div>
  )
}

export default App
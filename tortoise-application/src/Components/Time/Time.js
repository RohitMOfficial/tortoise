import React, { useEffect, useState } from 'react'
import Newtime from './Newtime';


const Time = () => {
    
    const [char,setchar]=useState('');
    const handlechange=(e)=>{
        setchar(e.target.value)
    }
   
    
    
  return (
    <div>
        <Newtime/>
        <input type="text" value={char} onChange={handlechange} />
    </div>
  )
}

export default Time
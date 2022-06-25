import React, { useEffect, useState } from 'react'


const Newtime = () => {
    const [time,settime]=useState(0);
    useEffect(()=>{
        let timeid=setInterval(()=>{
            settime(time+1);
        },1000);
        return  ()=> clearInterval(timeid);
    })

  return (
    <div>
        <h1>{time}</h1>

    </div>
  )
}

export default React.memo(Newtime)
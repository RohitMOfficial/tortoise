import React, { useEffect, useState } from 'react'

const Timer = (props) => {
    // console.log(props);
    const [time,setTime]=useState(0);
    
    const [finaltime,setFinaltime]=useState(0);

    
    // if(props.cnt===20){
    //     props.setLocal(time);
    // }
    
    
    useEffect(()=>{
        console.log("This is time interval");
        let timerid=setInterval(()=>{
            if(props.time.cnt===20){
                console.log("we are in local storage");
                if(localStorage.getItem('Fastest')==-1 && finaltime>0){
                    localStorage.setItem('Fastest',finaltime);
                   
                    

                    setFinaltime(0);
                    
                }
                else if(finaltime<localStorage.getItem('Fastest') && finaltime>0){
                   
                    localStorage.setItem('Fastest',finaltime);
                   
                    setFinaltime(0);
                }
            }
            
            if(props.time.timeflag && props.time.cnt<19){
            setTime(time+1);
            setFinaltime(time);
            
            }
            if(!props.time.timeflag ){
                props.time.sucfal(time);
                
                setTime(0);
                
            }
        },1000)

        return ()=>clearInterval(timerid);

    },)
    

  return (
    <div>
        <p>{time}</p>
    </div>
  )
}

export default React.memo(Timer)
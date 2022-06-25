import React, { useEffect, useMemo, useState } from 'react'
import Timer from '../Timer/Timer';
import './MainCard.css'

const MainCard = () => {
    const [char,setChar]=useState('');
    const [userchar,setUserchar]=useState('');
    const [allchar,setAllchar]=useState('');
    const [charFlag,setCharFlag]=useState(false);
    const [count,setCount]=useState(0);
    const [time,setTime]=useState(0);
    const [timeflag,setTimeflag]=useState(false);
    const [sucfal,setSucfal]=useState(false);
    const [bestTime,setBestTime]=useState(-1);

    const handlesucfal=(para)=>{
        
        setBestTime(bestTime)
    }

    const setLocal=(time)=>{
        localStorage.setItem("Fastest",time);
        
    }
    

    const getRandomChar=()=>{
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        const charactersLength = characters.length;
        let result= characters.charAt(Math.floor(Math.random() * charactersLength));
        if(count===20){
            if(localStorage.getItem('Fastest')==-1){
                result="Success";
            }
            else if(localStorage.getItem('Fastest')>bestTime){
                result="Success";
            }
            else{
                result="Failure";
            }

                
            
            setTimeflag(false);
            
            
        }
        setChar(result);
        setAllchar(allchar+result);
    }
    const handleChange=(e)=>{
       
        if(e.key.charCodeAt(0)>='A'.charCodeAt(0) && e.key.charCodeAt(0)<='Z'.charCodeAt(0) && e.key.length<=1){
            
            setUserchar(userchar+e.key);
            
            

        }
        
        if(e.key===char){
            setCount(count+1);
            
            setCharFlag(!charFlag);
           
            setTimeflag(true)
            
        }

    }

    let memoizedvalue=useMemo(()=>{
        return {timeflag:timeflag, cnt:count , sucfal:handlesucfal}
    },[timeflag]);

    const Reset=()=>{
        setCount(0);
        setChar('');
        setCharFlag(!charFlag);
        setAllchar('');
        setUserchar('');
        setTime(0);
        setTimeflag(false)
        setSucfal(false);
    }

    useEffect(()=>{
        getRandomChar();
    },[charFlag]);
    useEffect(()=>{
        localStorage.setItem('Fastest',-1);
    },[])


    
  return (
    <>
        <div className='maindiv'>
            <div className='card'>
                <div className='first'>
                    <h2>Type The Alphabet</h2>
                    <p>Typing game to see how fast you can type. Timer start when you do :)</p>

                </div>
                <div className='second'>
                    <h1>{char}</h1>

                </div>
                <div className='third'>
                    <Timer time={memoizedvalue}/>
                    {localStorage.getItem('Fastest')==-1? <p>You are playing first time</p>:<p>Your Fastest time is {localStorage.getItem('Fastest')}</p>}

                </div>
                <div className='fourth'>
                    <input type="text" placeholder='Type Here'  value={userchar} onKeyDown={handleChange}/>
                    <button onClick={Reset}>Reset</button>

                </div>
            </div>
        </div>

    </>
  )
}

export default MainCard
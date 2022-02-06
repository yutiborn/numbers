import React from 'react'
import {useState} from 'react';

function isPrime(number){
  if (number===0||number===1){return false}
  for(var i = 2;i < number; i++)
    if (number % i === 0) {return false}
    return true
}





const Table =(props)=> {
  let [newNumber,setNewNumber] = useState(props.number)
  const add =()=>{
  setNewNumber(newNumber += Math.floor(Math.random()*11))
  console.log('the state was changed')
  }
 
  return (
    <div className={isPrime(newNumber)?"scuare yellow":newNumber%2===0?"scuare red":"scuare green"}  onClick={add} >
        {newNumber}
         
    </div>
  )
}


export {Table}

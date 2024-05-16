import React, { useState } from 'react'
import Card from './components/Card'
import Nav from './components/Nav';

function App() {
 const data=[
    {name:"AMIT",profession:"Developer",image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"RAHUL",profession:"ACTIVIST",image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"AAYUSH",profession:"BACKCHOD",image:"https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"AMARDEEP",profession:"HUMAN",image:"https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
 ]

  const[Val,setVal]=useState(data);

  const handleFriendButton=(changingIndex)=>{
    setVal((previous) => {
  return previous.map((item, index) => {
    if (index === changingIndex) {
      // Spread the item first to ensure immutability
      return { ...item, friends: !item.friends };
    }
    return item;
  });
});
  }

  return (
    <>
    <div><Nav/></div>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {Val.map(( item,index)=>(
      <Card key={index} index={index} values={item} handleClick={handleFriendButton} />
      ))}
    </div>
    
   
    </>
  )
}

export default App

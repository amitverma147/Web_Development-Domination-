import React from 'react'

function Card({values,handleClick}) {
  const{name,index,image,profession,friends}=values;
  return (
    <div className='w-52 bg-white-200 rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-full object-cover' src= {image} alt="" />
      </div>
        <div className='w-full p-3 bg-white'>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <h5 className='text-xs'>{profession}</h5>
          <button onClick={()=>handleClick(index)} className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>
            {friends === true ? "Friends" : "Add Friend" }</button>
        </div>
      </div>
  )
}

export default Card

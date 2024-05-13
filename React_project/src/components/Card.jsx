import React from 'react'

function Card() {

      const data=[{image :'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', heading:"Amazon Basics", description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veritatis cum aspernatur?", stock: true  },
    {
        image:'https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', heading:"Flipkart",description :"Lorem, ipsum dolor sit amet consect", stock:false
    },
    ];


  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
       {data.map((elem,index)=>(
         <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden' >
            <div className='w-full h-32 bg-zinc-300 '>
                <img className='w-full h-full object-cover'  src={elem.image} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{elem.heading}</h2>
                <p className='text-xs mt-5'>{elem.description}</p>
                <button className={`text-xs px-4 py-1 ${elem.stock?'bg-sky-600' :'bg-red-600'} rounded mt-3`}>{elem.stock ? "In stock" :"Out of Stock"}</button>
            </div>
        </div>
       ))} 
    </div>
  )
}

export default Card

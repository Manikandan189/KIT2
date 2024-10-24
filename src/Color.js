import React, { useRef, useState } from 'react'

const Color = () => {

    const [search,searched]=useState('')
    const [color,colored]=useState("black")

    useRef()
    function change()
    {
      if(color==="black")
        colored("white")
      if(color==="white")
        colored("black")
    }
  return (
    <>
    <div className='color' style={{backgroundColor:search,color:color}}>
      {search}
    </div>
    <input className='inputbox'
    type='text'
    value={search}
    onChange={(e)=>searched(e.target.value)}
    />
    <button className='btn' onClick={change}>Click to change color</button>
    
    </>
  )
}

export default Color
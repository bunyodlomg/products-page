import React, { useState } from 'react'

const Pagination = ({ total, setUrl, val }) => {
  const nav = []
  for (let i = 1; i <= total / 10; i++) {
    nav.push(i)
  }
  const handleBtn = (e) => {
    const skip = e.target.textContent * 10 - 10
    setUrl(`https://products-fi34.onrender.com/products?skip=${skip}`)
  }
  return (
    <div className='flex justify-center gap-5 mt-10'>
     {!val && nav && nav.map(i => {
        return (
          <button onClick={handleBtn} className='m-2 py-1 px-3 bg-slate-500 rounded-lg hover:bg-opacity-80 text-white' key={i}>{i}</button>
        )
      })}
    </div>
  )
}

export default Pagination
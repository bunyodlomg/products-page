import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';
import { BiReset } from 'react-icons/bi';
const Search = ({ setUrl, setVal }) => {
    const [search, setSearch] = useState('');
    const changeSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 0) {
            setVal(e.target.value)
        } else {
            setVal(null)
            setUrl('https://products-fi34.onrender.com/products/')
        }
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(search);
        if (search.length) {
            setUrl(`https://products-fi34.onrender.com/products?search=${search}&limit=0`)
        }
    }
    return (
        <div>
            <div className="search container w-80 sm:w-[50%]  m-10 h-16 flex items-center bg-[#5A5C66]">
                <form onSubmit={submit} className='relative w-full' action="https://products-fi34.onrender.com/products/" method="get">
                    <input value={search} onChange={changeSearch} className='w-[90%] bg-inherit border-none p-2 m-3 mr-24 focus:outline-none text-xl text-slate-100' type="text" placeholder='Search...' />
                    {search && <BiReset onClick={() => {
                        setSearch("")
                        setUrl("https://products-fi34.onrender.com/products/")
                    }} className='absolute top-6 right-[15%] sm:right-[10%] lg:right-[5%] text-white text-2xl cursor-pointer active:opacity-30' />}
                    <GoSearch className='absolute top-6 right-[3%] text-2xl text-white cursor-pointer active:opacity-30' />
                </form>
            </div>
        </div>
    )
}

export default Search
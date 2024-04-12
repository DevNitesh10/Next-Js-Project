import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className="grid grid-cols-12 text-white bg-slate-800">
            <div className="colspan-3 text-center text-2xl py-2 font-bold hover:text-slate-200">
                <Link href="/">Our Store</Link>
            </div>
            <div className="colspan-6 flex py-2">
                <input type="search" className='border border-3 border-orange-500 w-full rounded-s-md text-black px-3 outline-none' />
                <button className='bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-300 hover:text-orange-800 active:bg-orange-500 active:text-white'>Search</button>
            
            </div>
            <div className="colspan-3">Icons</div>
        </div>
    </div>
    </>
  )
}

export default Header
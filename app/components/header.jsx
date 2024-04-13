import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className="px-3 md:px-0 grid md:grid-cols-12 text-white bg-slate-800">
            <div className="md:colspan-3 text-center text-3xl py-2 font-bold hover:text-slate-200">
                <Link href="/">Our Store</Link>
            </div>
            <div className="md:colspan-6 flex py-2">
                <input type="search" className='border border-3 border-orange-500 w-full rounded-s-md text-black px-3 outline-none' />
                <button className='bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-300 hover:text-orange-800 active:bg-orange-500 active:text-white'>Search</button>
            </div>
            <div className="md:colspan-3 flex justify-evenly py-3">
                <Link href={'/login'}>L</Link>
                <Link href={'/register'}>R</Link>
                <Link href={'/cart'}>C</Link>
            </div>
        </div>
    </div>

    <div className="flex justify-evenly bg-slate-500 py-2 text-white cursor-pointer">
        <Link href={'/'}>Home</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/services'}>Services</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
    </div>
    </>
  )
}

export default Header
"use client";
import React,{useState} from 'react'
import Link from 'next/link'
import NavLink from './Navlinks'
import {Bars3Icon, XmarIcon} from '@heroIcons/react/24/solid';
import MenuOverlay from './MenuOverlay';
const NavLinks =[
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Project",
        path:"#Projects",
    },
    {
        title:"Contact",
        path:"#Contact",

    }
]
function Navbar() {
    const [navbaropen,setnavbaropen]=useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
    <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'> Home </Link>
    <div className="mobile-menu block md:hidden">
    {
        !navbaropen?(
            <button onClick={()=>setnavbaropen(true)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
                <Bars3Icon className='h-5 w-5'/>
            </button>
        ):(
            <button onClick={()=>setnavbaropen(false)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
            <XmarIcon className='h-5 w-5'/>
            </button>
        )
    }
    </div>
    <div className="menu hidden md:block md:w-auto" id='navbar'>
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
           {
            NavLinks.map((link, index)=> 
            <li key={index}> 
            <NavLink href={link.path} title={link.title} />
            </li>)
           }
        </ul>
    </div>
    </div>
    {navbaropen? <MenuOverlay links={NavLinks} /> : null}
 
    </nav>
  )
}

export default Navbar
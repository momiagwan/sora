
/*import logo from "../assets/muslim.jpg";
import {navItems} from "../constants";
import React from 'react';
import {Menu,X} from "lucide-react"
import { useState } from "react";

 const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen]=useState(false)
    const toggleNavbar=()=>{setMobileDrawerOpen(!mobileDrawerOpen);}
  return (
 
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className=" flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt=""/>
                    <span className="text-xl tracking-tight">Sorathia</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
{navItems.map((item,index)=>(
    <li key={index}>
        <a href={item.href}>{item.label}</a>
    </li>


))}
                </ul>
               {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
           <a href="#" className="py-2 px-3 border rounded-md">
            Sign in
            </a>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-orange-800 py-2 px-3 rounded-md"> Create an account</a> </div>
        <div className="lg:hidden md:flex flex-col justify-end">*
     
<button onClick={toggleNavbar} className="lg:hidden">
  {mobileDrawerOpen ? <X /> : <Menu />}
</button>
         </div>
       {/* </div>*
       
        {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
           <ul>{navItems.map((item,index)=>(<li key={index} className="py-4">
            <a href={item.href}>{item.label}</a></li>)
        )}</ul>
      {/*  <div className="flex space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md">Sign in</a>
            <a  href='#'className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Create an account
            </a>
        </div>*
        
        
            </div>)}
        </div>
    </nav>
  )
}
export default Navbar
*/
import React, { useState } from "react";
import logo from "../assets/muslim.jpg";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="w-full px-4 mx-auto relative text-sm flex items-center justify-between">
        {/* Left: Logo + Sorathia */}
        <div className="flex items-center">
          <img className="h-10 w-10 mr-2 rounded-full" src={logo} alt="Logo" />
          <span className="text-xl font-semibold tracking-tight text-white">Sorathia</span>
        </div>

        {/* Right: Nav Items (Desktop only) */}
        <ul className="hidden lg:flex space-x-10 text-white ml-auto">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="lg:hidden text-white ml-auto">
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-900 p-12 flex flex-col justify-center items-center lg:hidden transition-all">
          <ul className="space-y-6 text-white text-xl">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="hover:text-cyan-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

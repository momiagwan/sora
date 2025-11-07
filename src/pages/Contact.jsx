import React from 'react'
import jamaatkhana from "../assets/jamaatkhana.mp4"
import  {contacts}  from '../constants'
import { CheckCircle2 } from 'lucide-react'
import {Mails} from 'lucide-react'

const Contact = () => {
  return (
    <div className='mt-20 '>
    <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'><span className='bg-gradient-to-r from-fuchsia-500 to-green-800 bg-clip-text text-transparent'>You can Contact through</span></h2>
<div className='flex flex-wrap justify-center py-12'>
    
    <video autoPlay loop muted className=' rounded-lg w-7/2 border border-orange-700 shadow-range-400 mx-2 my-4 '><source src={jamaatkhana} type='video/mp4'/>Your browser does not support the video tag</video>


<div className='pt-12 w-full lg:w-1/2 '>
    {contacts.map((item,index)=>(<div key={index} className='flex mb-12'>
        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'> {item.icon}</div>
   <div>
    <h5 className='mt-1 mb-2 text-xl'>
        {item.title}
    </h5>
    <a  href={item.href} className='text-md text-neutral-500'>{item.description}</a>
   </div>
    </div>))}
</div>
</div>
</div>
  )
}

export default Contact
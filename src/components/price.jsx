import React from 'react'
import {CheckCircle2} from 'lucide-react'
import { pricingOptions } from '../constants'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-7xl text-center my-8 tracking-wider bg-gradient-to-r from-teal-500 to-green-800 text-transparent bg-clip-text'>Donation</h2>
        <div className='flex flex-wrap'>{pricingOptions.map((option,index)=>(<div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className='p-10 border border-neutral-700 rounded-xl'>
           <p className='text-4xl mb-8 bg-gradient-to-r from-yellow-500 to-green-800 text-transparent bg-clip-text'>{option.title}
           {option.title==="Pro" && (<span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most popular)</span>)}</p>
            <p className='mb-8'><span className='text-5xl mt-6 mr-2'>{option.price}</span>
            <span className=' text-neutral-400 tracking-tight'>/year</span></p>
            <ul>
                {option.features.map((feature,index)=>(<li key={index} className='mt-8 flex items-center'><CheckCircle2/>
                <span className='ml-2'>{feature}</span></li>))}
            </ul>
            <div className='inline-flex justify-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 bold border border-orange-900 rounded-lg transition duration-200'>Donate</div>
            </div>
        </div>))}</div>
    </div>
  )
}

export default Pricing
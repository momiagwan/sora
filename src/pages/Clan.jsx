import React from 'react'
import { clans} from '../constants'
import Imgclan from "../assets/clans.jpg"
import ReactReadMoreReadLess from "react-read-more-read-less";



const Clan = () => {
 //const text= clans.map((clans,index)=>{return clans.text})
 


 
  return (
    <div className='mt-20 tracking-wide  '>
    <h2 className='text-3xl sm:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text text-center my-10 lg:my-20'>Clans</h2>
          <div className='flex items-center justify-center'>
           <img className='  p-8  w-full lg:w-1/2  border border-cyan-700 shadow-range-400 '  src={Imgclan} alt="Code"/>
    </div>
    <div className='flex flex-wrap justify-center '>
        {clans.map((clans,index)=>( <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral-800 rounded-md p-6 text-md border border-neutral-800 font-thin '>
            <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {clans.text}
            </ReactReadMoreReadLess>
              <div className='flex mt-8 items-start'>
              <div><h2>{clans.user}</h2>
              </div>
              
              </div>
              </div>
              </div>
))}
    </div>
</div>
  )

}

export default Clan
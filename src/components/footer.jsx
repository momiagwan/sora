import React from 'react'
import {resourcesLinks,platformLinks,communityLinks} from "../constants"
import {Link} from "react-router-dom"
const Footer = () => {
  return <footer className='mt-20 border-t py-10 border-neutral-700'>
<div className='grid grid-cols-2 lg:grid-cols-3 gap-x-20 px-10 '>
    <div>
        <h3 className='text-md font-semibold'>Current affairs:</h3>
        <ul className='space-y-2'>{resourcesLinks.map((link,index)=>(<li key={index}>
            <a  className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
        </li>))}</ul>
    </div>
    <div>
        <h3 className='text-md font-semibold'>Events:</h3>
        <ul className='space-y-2'>{platformLinks.map((link,index)=>(<li key={index}>
            <a  className="text-neutral-300 hover:text-white"href={link.href}>{link.text}</a>
        </li>))}</ul>
    </div>
    <div>
        <h3 className='text-md font-semibold'>information:</h3>
        <ul className='space-y-2'>{communityLinks.map((link,index)=>(<li key={index}>
            <a  className="text-neutral-300 hover:text-white"href={link.href}>{link.text}</a>
        </li>))}</ul>
    </div>
</div>
  </footer>
    

}

export default Footer


import React from 'react'
//import Posts from "../components/posts"
import HeroSection from '../components/herosection'
import Navbar from '../components/navbar'
import FeatureSection from '../components/featureSection'
import Workflow from '../components/workflow'
import Pricing from '../components/price'
import Testimontals from '../components/testimontals'
import Footer from '../components/footer'



const Home = () => {
  return (
   
        <>
       
    <div className='max-w-7xl mx-auto pt-20 px-6'> 
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    {/*<Testimontals/>*/}
  
  
    </div>
   
    </>
    
  )
}

export default Home
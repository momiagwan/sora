import { useState } from 'react'
import HeroSection from './components/herosection'
import Navbar from './components/navbar'
import FeatureSection from './components/featureSection'
import Workflow from './components/workflow'
import Pricing from './components/price'
import Testimontals from './components/testimontals'
import Footer from './components/footer'
import  Router  from "./router/Router"






const App=()=> {
  

  return (
  
  
   /*<><Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'> 
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimontals/>
  <Footer/>
  <Router/>
  
    </div>
   
    </>*/

    <Router/>
  )
}

export default App

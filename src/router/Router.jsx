import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Services from '../pages/services'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Aboutus from '../pages/aboutus'
import Dashboard from '../pages/Dashboard'
import Founders from '../pages/founders'
import Election from '../pages/Election'
import Contact from '../pages/Contact'
import Clan from '../pages/Clan'
import Donate from "../pages/donate"

import AdminDashboard from "../pages/Dashboard";
import BlogByCategory from "../pages/BlogCategory";
import BlogList from "../pages/BlogList";
import ProtectedRoute from "../components/ProtectedRoute";





const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {['home', '/', ].map(path => <Route path={path} element={<Home />} />)}
  
        
        <Route  path='/aboutus' element={<Aboutus/>}/>
        <Route  path='/donate' element={<Donate/>}/>
       
      {/* <Route  path='/posts/user/:id' element={<BlogByCategory/>}/>
        <Route   path='/posts/category/marriages' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/deaths' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/warnings' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/notifications' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/communityforms' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/webinars' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/education' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/pilgrims'element={<BlogByCategory/>}/>
        <Route  path='/posts/category/generalbodyijlas' element={<BlogByCategory/>}/>
        <Route  path='/posts/category/educationcommiteeevent' element={<BlogByCategory/>}/>
             <Route path='/services'element={<Services/>}/>*/}
       
   
      
  
        <Route  path='/myposts/:id' element={<Dashboard/>}/>
        <Route path="/BlogList" element={<BlogList />} />
        <Route path="Currentaffairs" element={<BlogList />}/>
      <Route path="/login" element={<Login />} />
      <Route path="BlogCategory/:category" element={<BlogByCategory />} />
      <Route path="/posts/category/:category" element={<BlogByCategory />} />
      <Route
        path="/Dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>} />
        <Route path='/elections' element={<Election/>}/>
  
        <Route  path='/login' element={<Login/>}/>
    
        <Route path="/contact" element={<Contact/>}/>
       
        <Route  path='/founders' element={<Founders/>}/>
        <Route path="/clans" element={<Clan/>}/>
        <Route  path='*' element={<ErrorPage/>}/>
        
        
        
    </Routes>
    <Footer/>
   
   
    
    </BrowserRouter>
    
    </>
  )
}

export default Router
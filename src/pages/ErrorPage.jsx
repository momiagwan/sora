import React from 'react'


const ErrorPage = () => {
  return (<>
  <div className='p-10 flex items-center justify-center'>
    <h1 className='p-10'>Oops! this page is Not found</h1>
    <a  href={"/"} className="bg-gradient-to-r from-cyan-500 to-orange-800 py-2 px-3 rounded-md"> Back to Home</a> 
    </div>
    </>
  )
}

export default ErrorPage
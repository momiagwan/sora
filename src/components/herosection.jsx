 
 import jamaatkhana from '../assets/jamaatkhana.mp4';
 import electionday from '../assets/quaid.mp4';


 const HeroSection=()=>{
    return (<div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'> <span className='bg-gradient-to-r from-lime-500 to-lime-800 text-transparent bg-clip-text'>Sorathia Muslim Ghanchi Jamat</span></h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Your own community where everyone is working for humanity and brotherhood</p>
        <div className='flex justify-center my-10'>
            <a href='/Currentaffairs' className='py-3 px-4 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Current affairs</a>
        
        <a href='/aboutus' className='py-3 px-4 mx-3 rounded-md border  bg-gradient-to-r from-orange-500 to-orange-800'>About us</a></div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-range-400 mx-2 my-4 '><source src={jamaatkhana} type='video/mp4'/>Your browser does not support the video tag</video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-range-400 mx-2 my-4 '><source src={electionday} type='video/mp4'/>Your browser does not support the video tag</video>
        </div>
    </div>
    

    );
 };
 export default HeroSection
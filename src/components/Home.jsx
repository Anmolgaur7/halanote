import React from 'react'
import Home1 from "../images/home1.jpeg";
import Home2 from "../images/home2.jpg";
import Home3 from "../images/home3.webp";
export default function home() {
    return (
        <>
            <div className='bg-black'>
                <div className='w-full h-4 bg-yellow-300'>
                </div>
                <div className=' flex justify-evenly  flex-wrap pt-10'>
                    <img src={Home1} alt="some network  error" className='w-96 h-auto m-5 border-none  rounded-full  ' />
                    <img src={Home2} alt="Some neetwork error" className='w-96 h-auto m-5 border-none  rounded-full' />
                    <img src={Home3} alt="Some neetwork error" className='w-96 h-auto m-5 border-none  rounded-full' />
                </div>
                <div className='flex justify-center items-center m-10'>
                    <h1 className='text-center font-extrabold font-mono text-7xl p-8 text-yellow-300 border-4 border-yellow-300 p-auto border-dashed w-fit'><i className=''>Note making made easy</i></h1>
                </div>
                <p className='text-center text-2xl font-mono text-yellow-300'>Halanote which means "Go note" is note  taking application which can be used to store your importants notes on the cloud.Traditional text docs are great for writing, but thinking requires something more,and halanote provide better ui and mainly u can access your notes from any where.</p>
                <div className=' w-full bg-yellow-300 flex justify-center items-center mt-5'>
                    <h1 className=' text-2xl font-mono text-black font-semibold p-3'>© 2022-2030 Halanote All rights reserved</h1>
                    <div className='flex ml-400px flex-wrap' >
                        <a href="/"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 m-1 animate-pulse hover:animate-none" viewBox="0 0 24 24"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></svg></a>
                        <a href="https://github.com/Anmolgaur7/halanote" rel="noreferrer" target={'_blank'}><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="text-xl m-1 animate-pulse hover:animate-none" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" /></svg></a>
                    </div>
                </div>

            </div>

        </>
    )
}

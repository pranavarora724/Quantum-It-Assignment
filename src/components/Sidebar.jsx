
import { RxCrossCircled } from "react-icons/rx";


import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
// import { useState } from 'react';



function Sidebar()
{

    const {contextSafe} = useGSAP();

    const closeSidebar = contextSafe(()=>{
        gsap.to('.sidebar',{
            x:200,
            duration:1
        })
        
    })

    return(
        <div className="sidebar fixed z-30 top-0 right-0 h-[100vh] w-[200px] translate-x-[200px] bg-richblack-700">
            
            <div className="flex flex-col w-[100%] h-[100%] mt-6 text-white font-semibold">

                <div onClick={closeSidebar}><RxCrossCircled className="cross text-white text-xl cursor-pointer"/></div>
                <div className="hover:bg-richblack-600 ease-in-out transition-all duration-200 p-2 cursor-pointer">Home</div>
                <div className="hover:bg-richblack-600 ease-in-out transition-all duration-200 p-2 cursor-pointer">Class</div>
                <div className="hover:bg-richblack-600 ease-in-out transition-all duration-200 p-2 cursor-pointer">Promo</div>
                <div className="hover:bg-richblack-600 ease-in-out transition-all duration-200 p-2 cursor-pointer">Online Class</div>
                <div className="hover:bg-richblack-600 ease-in-out transition-all duration-200 p-2 cursor-pointer">Contact</div>

            </div>
        </div>
    )
}

export default Sidebar;
import { FaMountainSun } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";


import {useGSAP} from '@gsap/react'
import gsap from 'gsap';

function Navbar()
{

    const {contextSafe} = useGSAP();

    const openSidebar = contextSafe(()=>{
        gsap.to('.sidebar',{
            x:0,
            duration:1
        })
        
    })
   

    return(
        
            <div>
                <div className="navbar fixed z-20 w-[100%]  min-[600px]:top-0  mx-auto text-white  ">
                        <div className="p-2 max-w-[1180px] w-[90%] mx-auto flex flex-row   gap-x-14 justify-start max-[800px]:justify-between items-center">
                            
                            <div className="flex flex-row items-center gap-x-3">
                                
                                <div>
                                <FaMountainSun className="text-sky-400 text-4xl"/>
                                </div>

                                <div className="cursor-pointer">
                                    <span className="text-sky-500">Hiking</span>
                                    <span className="text-sky-500 font-semibold">Life</span>
                                </div>
                                
                            </div>
                            <div className="hidden min-[800px]:flex  min-[800px]:flex-row gap-x-14">
                                <div className="cursor-pointer">Home</div>
                                <div className="cursor-pointer">Class</div>
                                <div className="cursor-pointer">Promo</div>
                                <div className="cursor-pointer">Online Class</div>
                                <div className="cursor-pointer">Contact</div>
                            </div>

                            <div onClick={openSidebar} className="cursor-pointer flex min-[800px]:hidden">
                            <RxHamburgerMenu className="text-sky-400 font-semibold" />
                            </div>
                        </div>
                    </div>

                    <Sidebar></Sidebar>
            </div>
       
    )
}

export default Navbar;
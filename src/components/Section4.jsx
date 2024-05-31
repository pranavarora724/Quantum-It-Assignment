import { BsBackpack3 } from "react-icons/bs";
import { GiHiking } from "react-icons/gi";
import { PiMountains } from "react-icons/pi";
import { ImCross } from "react-icons/im";



function Section4() {
    return (
        <div className="mt-10">

            <div className="max-w-[1180px] w-[90%] mx-auto flex flex-col min-[900px]:flex-row items-center justify-between gap-y-10">

                {/* Left div */}
                <div className="max-w-[600px] w-[90%] min-[900px]:w-[55%]">
                    <div className="text-3xl sm:text-4xl max-w-[400px] w-[80%] font-semibold">HOW TO RECOVER FROM A HIKE</div>
                    <div className="mt-7 h-[5px] max-w-[100px] w-[100%] bg-sky-400"></div>

                    {/* top */}
                    <div className=" mt-12 w-[100%] flex flex-col gap-y-7 min-[550px]:gap-y-0  min-[550px]:flex-row gap-x-5 items-center">

                        <div className="w-[100px] h-[100px] bg-richblue-800 rounded-full flex justify-center items-center">
                            <BsBackpack3 className="text-sky-400 font-semibold text-5xl" />
                        </div>

                        <div className="flex flex-col gap-y-2 w-[85%] max-[550px]:text-center">
                            <div>- Rehydrate with water or electrolyte-rich drinks.</div>
                            <div>- Elevate your feet to reduce swelling.</div>
                            <div>- Apply a cold compress to sore areas.</div>
                        </div>

                    </div>

                    {/* middle */}
                    <div className="mt-12 w-[100%] flex flex-col gap-y-7 min-[550px]:gap-y-0 min-[550px]:flex-row gap-x-5 items-center">

                        <div className="w-[100px] h-[100px] bg-richblue-800 rounded-full flex justify-center items-center">
                            <GiHiking className="text-sky-400 font-semibold text-5xl" />
                        </div>

                        <div className="flex flex-col gap-y-2 w-[85%] max-[550px]:text-center">
                            <div>- Rehydrate with water or electrolyte-rich drinks.</div>
                            <div>- Elevate your feet to reduce swelling.</div>
                            <div>- Apply a cold compress to sore areas.</div>
                        </div>

                    </div>


                    {/* Bottom */}
                    <div className="mt-12 w-[100%] flex flex-col gap-y-7 min-[550px]:gap-y-0 min-[550px]:flex-row gap-x-5 items-center justify-center">

                        <div className="w-[100px] h-[100px] bg-richblue-800 rounded-full flex justify-center items-center">
                            <PiMountains className="text-sky-400 font-semibold text-5xl" />
                        </div>

                        <div className="flex flex-col gap-y-2 w-[85%] max-[550px]:text-center">
                            <div>- Rehydrate with water or electrolyte-rich drinks.</div>
                            <div>- Elevate your feet to reduce swelling.</div>
                            <div>- Apply a cold compress to sore areas.</div>
                        </div>

                    </div>
                </div>

                {/* Right div */}
                <div className="max-w-[600px] w-[80%] min-[900px]:w-[40%] flex flex-col gap-y-10 items-center">
                    <div className="w-[300px] h-[300px]">
                        <img className="w-[100%] h-[100%] rounded-full object-cover" src="/pics/Trekking1.jpg"></img>
                    </div>

                    <div className="text-sky-500 text-2xl w-[300px] text-center">Make Sure Your Gear Fits</div>
                </div>
            </div>
        </div>
    )
}

export default Section4;
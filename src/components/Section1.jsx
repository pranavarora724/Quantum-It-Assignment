import { BsBackpack3 } from "react-icons/bs";
import { GiHiking } from "react-icons/gi";
import { PiMountains } from "react-icons/pi";
import { ImCross } from "react-icons/im";


function Section1() {
    return (
        <div className="mt-10 relative mb-20">

            <div className="w-[100%]">
                <div className="max-w-[1180px] w-[90%] mx-auto">
                    <div className="text-2xl font-semibold">HIKING AND CAMPING</div>
                    <div className="text-2xl font-semibold mt-2">CLASSES</div>
                    <div className="h-1 w-[70px] bg-sky-600 mt-2"></div>
                </div>

                <div className="max-w-[1000px] mx-auto w-[70%] flex flex-col gap-y-12 md:flex-row gap-x-12 mt-6 justify-center">

                    {/* Box -1 */}
                    <div className="flex flex-col gap-y-5 items-center">
                        <div className="w-[100px] h-[100px] bg-richblue-800 rounded-full flex justify-center items-center">
                        <BsBackpack3 className="text-sky-400 font-semibold text-5xl"/>
                        </div>

                        <div className="text-richblue-700 font-semibold text-2xl">ACTIVITIES</div>

                        <div className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>

                    {/* Box -2 */}
                    <div className="flex flex-col gap-y-5 items-center">
                        <div className="w-[100px] h-[100px] bg-richblue-800 rounded-full flex justify-center items-center">
                        < GiHiking className="text-sky-400 font-semibold text-5xl"/>
                        </div>

                        <div className="text-richblue-700 font-semibold text-2xl">HIKING</div>

                        <div className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                    </div>

                    {/* Box -3 */}
                    <div className="flex flex-col gap-y-5 items-center">
                        <div className="w-[100px] h-[100px] bg-richblue-800 rounded-full flex justify-center items-center">
                        <PiMountains className="text-sky-400 font-semibold text-5xl"/>
                        </div>

                        <div className="text-richblue-700 font-semibold text-2xl">MOUNTAINS</div>

                        <div className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                    </div>
                </div>
            </div>

            <ImCross className="hidden sm:block absolute left-3 top-4 text-green-400"/>
            <ImCross className="hidden sm:block absolute left-3 top-14 text-green-400"/>

            <ImCross className="absolute right-3 bottom-2 text-green-400"/>
            <ImCross className="absolute right-3 bottom-10 text-green-400"/>

        </div>
    )
}

export default Section1;
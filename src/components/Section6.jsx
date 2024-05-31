
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

function Section6(){
    return(
        <div className="mt-10">

            <div className="max-w-[1180px] w-[85%] mx-auto">
                <div className="text-richblack-800 font-semibold text-4xl max-w-[400px] w-[100%]">PLACES TO VISIT IN AUTUMN</div>

                <div className="mt-20 w-[100%] flex flex-col gap-y-8 min-[900px]:flex-row justify-center items-center">

                    {/* First */}
                    <div className="relative flex flex-col gap-y-4 max-w-[300px] w-[100%] justify-center items-center">
                        <img className="w-[250px] h-[250px] rounded-full object-cover" src="https://instatravelstyle.com/wp-content/uploads/2023/10/Trekking-in-the-Himalayas-A-Soul-Stirring-Adventure-in-Bhutans-Pristine-Mountains.jpg"></img>

                        <div>
                            <div className="font-semibold text-2xl text-center">Mountain Loop</div>
                            <div className="mt-5 text-center">Lorem ipsum dolor sit amet.</div>
                            <div className="mt-5 w-[100%] h-[1px] bg-gray-700"></div>
                            <div><span className="mt-5 font-semibold">Location </span> 0.3 Miles .</div>
                        </div>

                        <div className="absolute left-4 top-[60%] cursor-pointer">
                        <PiDotsThreeOutlineVerticalFill className="text-sky-500 text-3xl"/>
                        </div>
                    </div>

                    {/* Second */}
                    <div className="relative flex flex-col gap-y-4 max-w-[300px] w-[100%] justify-center items-center">
                        <img className="w-[250px] h-[250px] rounded-full object-cover" src="/pics/Trekking4.jpg"></img>

                        <div>
                            <div className="font-semibold text-2xl text-center">National Park</div>
                            <div className="mt-5 text-center">Lorem ipsum dolor sit amet.</div>
                            <div className="mt-5 w-[100%] h-[1px] bg-gray-700"></div>
                            <div><span className="mt-5 font-semibold">Location </span> 0.2 Miles .</div>
                        </div>

                        <div className="absolute left-4 top-[60%] cursor-pointer">
                        <PiDotsThreeOutlineVerticalFill className="text-sky-500 text-3xl"/>
                        </div>

                    </div>

                    {/* Third */}
                    <div className="relative flex flex-col gap-y-4 max-w-[300px] w-[100%] justify-center items-center">
                        <img className="w-[250px] h-[250px] rounded-full object-cover" src="/pics/Trekking5.jpg"></img>

                        <div>
                            <div className="font-semibold text-2xl text-center">Canyon Trail</div>
                            <div className="mt-5 text-center">Lorem ipsum dolor sit amet.</div>
                            <div className="mt-5 w-[100%] h-[1px] bg-gray-700"></div>
                            <div><span className="mt-5 font-semibold">Location </span> 0.6 Miles .</div>
                        </div>

                        <div className="absolute left-4 top-[60%] cursor-pointer">
                        <PiDotsThreeOutlineVerticalFill className="text-sky-500 text-3xl"/>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex justify-center items-center">
                    <div className="cursor-pointer w-fit px-4 py-1 border-2 border-blue-500 text-gray-700 hover:bg-blue-500 hover:text-white ease-in-out transition-all duration-200 ">see more</div>
                </div>
            </div>
        </div>
    )
}

export default Section6;
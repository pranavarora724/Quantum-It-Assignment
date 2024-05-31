import { PiMountains } from "react-icons/pi";


function Section8()
{
    return(
        <div className="">
        <div className="w-[100%] h-[350px] sm:h-[500px] relative bg-black text-white">
            <img className="w-[100%] h-[100%] object-cover object-top opacity-50" src="/pics/Trekking2.jpg"></img>

            {/* <div className="absolute text-3xl sm:text-4xl max-w-[350px] sm:max-w-[500px] top-[38%] sm:top-[35%] left-[10%] font-semibold">Big Bend National Park Hiking Guide</div> */}
            {/* <div className="absolute max-w-[250px] sm:max-w-[300px] text-xl sm:text-2xl top-[59%] sm:top-[55%] left-[10%]">The Hike Is the Next Best Option</div> */}

            <div className="w-[100%] absolute top-[30%]  flex flex-col justify-center items-center">
                
                <div className="text-2xl sm:text-3xl font-semibold text-center max-w-[400px] sm:max-w-[600px] w-[90%]">The Asanas Purify Our Body and Keep It Healthy  Making It A Suitable Vehicle For The Soul</div>
                <div className="mt-5">
                    <PiMountains className="text-5xl text-sky-500"/>
                </div>

                <div className="mt-3 sm:mt-5">
                <div className="cursor-pointer w-fit px-4 py-1 border-2 border-blue-500 text-white hover:bg-blue-500 hover:text-white ease-in-out transition-all duration-200 ">see more</div>
                </div>

            </div>
            {/* <div className="absolute px-6 py-1 border-blue-500 hover:bg-blue-500 transition-all ease-in-out duration-200 cursor-pointer border-2 top-[80%] sm:top-[70%] left-[10%]">See more</div> */}
        </div>
    </div>
    )
}

export default Section8;
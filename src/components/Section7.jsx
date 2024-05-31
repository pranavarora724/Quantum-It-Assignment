function Section7()
{
    return(
        <div className="mt-10 bg-richblack-800 pt-10 text-white pb-10">

        <div className="max-w-[1180px] w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-10">

            {/* Left div */}
            <div className="max-w-[600px] w-[80%] md:w-[40%] flex flex-col gap-y-10 items-center">
                <div className="w-[300px] h-[300px]">
                    <img className="w-[100%] h-[100%] rounded-full object-cover" src="/pics/rock_climbing1.jpg"></img>
                </div>

                <div className="text-sky-500 text-2xl w-[300px] text-center">Walking in nature is a Recreational Activity</div>
            </div>
            
               {/*Right div */}
            <div className="max-w-[600px] w-[80%] md:w-[50%]">
                <div className="text-3xl sm:text-4xl max-w-[200px] w-[80%] font-semibold">ROCK CLIMBING</div>
                <div className="text-xl sm:text-2xl mt-10 font-semibold">1. CLASSES AND EVENTS</div>
                <div className="mt-5 text-lg sm:text-xl max-w-[400px] w-[100%]">Kundalini is the most classic yoga . It's Origin in the Raya Yoga Of Patanjali and other classical texts such as Bhagwad Gita and Hatha Yoga Padipika</div>
                <div className="mt-7 h-[2px] max-w-[450px] w-[100%] bg-sky-400"></div>
                <div className="mt-7 text-xl">17 Modules</div>
                <div className="mt-1 text-xl">divided into 5 weekends</div>

                <div className="mt-7 flex flex-row gap-x-10  text-lg font-bold">
                    <div className="w-[75px]">Start April 15 20.00 hs</div>
                    <div className="w-[70px]">Price $900</div>
                </div>
            </div>

            
        </div>
    </div>
    )
}

export default Section7;


function Home() {
    return (
        <div>
            <div className="relative w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh]">

                <img className="w-[100%] h-[100%] object-cover" src="/pics/hiking2.webp"></img>

                {/*Top left div  */}
              <div className="absolute top-0 left-0 w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh]  [clip-path:polygon(100%_0%,0%_0%,0%_100%)] bg-green-400 ">
              <div className="absolute top-0 left-0 w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh]  [clip-path:polygon(98%_0%,0%_0%,0%_98%)] bg-richblack-900 ">
               <div className="absolute top-0 left-0 w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh]  [clip-path:polygon(90%_0%,0%_0%,0%_90%)] bg-richblack-800 ">
                    <div className="div1 max-w-[200px] min-[600px]:max-w-[300px] leading-6 min-[600px]:leading-10  min-[600px]:text-4xl text-2xl absolute text-white font-semibold top-[30%] left-[5%] ">
                        Discover Your Next Hike
                    </div>

                    <div className="w-[140px] min-[600px]:max-w-[250px] leading-6 min-[600px]:text-xl text-sm absolute text-white font-semibold top-[44%] left-[5%]  ">
                        Discover your wild side . Hike Today
                    </div>
                </div>

               </div>
              </div>

                {/* Bottom right div */}
                <div className="w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh] bottom-0 right-0 absolute  [clip-path:polygon(100%_60%,61%_100%,100%_100%)] bg-richblack-900">
                    <div className="w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh] bottom-0 right-0 absolute  [clip-path:polygon(100%_68%,69%_100%,100%_100%)] bg-green-400">
                    <div className="w-[100%] h-[50vh] min-[470px]:h-[60vh] min-[600px]:h-[80vh] md:h-[99vh] bottom-0 right-0 absolute  [clip-path:polygon(100%_70%,71%_100%,100%_100%)] bg-richblack-800"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
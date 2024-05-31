import { PiMountains } from "react-icons/pi";


function Footer() {
    return (
        <div className="mt-10">

            <div className="max-w-[1180px] w-[85%] mx-auto flex flex-col md:flex-row justify-between">

                {/* Left div */}
                <div className="max-w-[600px] md:w-[50%] w-[90%]">
                    <div className="font-semibold">ABOUT</div>
                    <div className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum natus suscipit quam accusantium doloremque saepe nostrum, assumenda enim aspernatur eos minus fugit incidunt quia deserunt dolor esse. Inventore, voluptates!</div>

                    <div className="mt-7 flex flex-row gap-x-4  items-center">
                        <div>
                            <PiMountains className="text-5xl text-sky-500" />
                        </div>
                        <div className="text-sky-500">Hiking <span className="font-semibold">Life</span></div>
                    </div>
                </div>

                {/* Righ div */}
                <div className="grid grid-cols-3 gap-x-12  mt-10 md:mt-0 items-center  justify-center">
                    <div className="text-center">
                        <div className="font-semibold text-lg">About</div>

                        <div className="mt-7">
                            <div>Team</div>
                            <div>Join Us</div>
                            <div>Ethic</div>
                            <div>Goals</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="font-semibold text-lg">About</div>

                        <div className="mt-7">
                            <div>Team</div>
                            <div>Join Us</div>
                            <div>Ethic</div>
                            <div>Goals</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="font-semibold text-lg">About</div>

                        <div className="mt-7">
                            <div>Team</div>
                            <div>Join Us</div>
                            <div>Ethic</div>
                            <div>Goals</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
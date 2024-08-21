import React from "react";
import MapComponent from "./MapComponent";

const FlightFlowComponent = () => {
    return ( 
        <div className="FlightFlow">

            <div className="w-auto intro-container">

                <div className="bg-[url('/flightFlow.jpg')] relative bg-no-repeat bg-center bg-cover sm:h-56 lg:h-80 rounded-md intro-content">

                    <div className="text-left text-white pt-4 sm:pt-9 md:pt-12 pl-5 sm:pl-10 font-semibold capitalize intro-text">
                        <h2 className="text-xl sm:text-1xl md:text-2xl w-2/3 sm:w-1/2 md:w-4/12">
                            Make your travel whishlist, we’ll do the rest
                        </h2>
                        <p className="text-xs font-normal normal-case p">
                            special offer to suit your plan
                        </p>
                    </div>

                    <div className="absolute sm:h-56 lg:my-20 rounded-lg bg-white shadow-md book-ticket">

                        <div className="flex flex-row w-3/4 h-11 p-2.5 nav">
                            <h1 className="flex flex-row mx-4 h-6 text-xs mt-2.5 hover:border-b-2 border-black font-semibold text-black">Where are you flying ?</h1>
                        </div>

                        <div className="relative text-xs mx-3 py-3 intro-info">

                            <form className="flex flex-wrap justify-between">
                                <div className="relative w-auto h-auto m-2">
                                <label className="absolute left-3" htmlFor="from-to">from-to</label>
                                <input className="shadow-md w-36 h-6 mt-2" type="text" placeholder="Lahore-Karachi" />
                                </div>
                                <div className="relative w-auto h-auto m-2">
                                    <label className="absolute left-3" htmlFor="trip">trip</label>
                                    <select className="shadow-md w-28 h-6 mt-2"> <option value="return">return</option> <option value="stay">stay</option></select>
                                </div>
                                <div className="relative w-auto h-auto m-2">
                                    <label className="absolute left-3" htmlFor="depart-return">depart-return </label>
                                    <input className="shadow-md w-40 h-6 mt-2" type="text" placeholder="DD/MM/YYYY - DD/MM/YYYY" />
                                </div>
                                <div className="relative w-auto h-auto m-2">
                                    <label className="absolute left-3" htmlFor="passenger-class">passenger-class</label>
                                    <input className="shadow-md w-36 h-6 mt-2" type="text" placeholder="1 Passenger, Economy" />
                                </div>
                            </form>

                            <div className="absolute right-0 w-auto h-auto md:pt-5  button text-black">
                                <button className=" text-xs capitalize bg-transparent border-none outline-none mr-2">add promo code</button>
                                <button className="text-xs capitalize bg-green-400 border-none outline-none px-2 py-2 rounded-md">show flight</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
            <div className="map">
                <div className="maptext flex flex-row flex-wrap justify-between px-3 mb-10">
                    <div className="sm:ml-3 text">
                        <h3 className="text-xl">Let's go places together</h3>
                        <p className="p">Discover the latest offers and news and start planning your next trip with us.</p>
                    </div>
                    <button className="px-2 py-1 border-2 border-green-400 my-1 rounded-md capitalize sm:mr-8 ">
                        see all
                    </button>
                </div>
                < MapComponent />
            </div>

            <div className="travel-list">
                
            </div>
        </div>
     );
}
 
export default FlightFlowComponent;
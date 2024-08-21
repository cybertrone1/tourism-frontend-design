import React from "react";
import { useState, useEffect } from "react";

const Home = () => {

    const [places, setPlaces] = useState(null);
    const [feedbacks, setFeedbacks] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchDataController = new AbortController();
        const FeedBackController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/places", {signal: fetchDataController.signal});
                
                if (!response.ok) {
                    throw new Error('Unable to access data! Status: ' + response.status);
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error('Expected JSON, but got: ' + contentType);
                }

                const result = await response.json();
                setPlaces(result);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            }
        };

        const fetchFeebacks = async () => {
            try {
                const response = await fetch("http://localhost:5001/feedback", {signal: fetchDataController.signal});

                if (!response.ok) {
                    throw new Error("unable to fetch feedbacks:" + response.status);
                }

                const contentType = response.headers.get("Content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error('Expected JSON, but got: ' + contentType);
                }

                const data = await response.json();
                setFeedbacks(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            }
        }

        fetchData();
        fetchFeebacks();


        return () => {
            fetchDataController.abort();
            FeedBackController.abort();
        }

    }, []);



    return ( 
        <div className="relative w-full h-auto home">

            <div className="w-auto intro-container">

                <div className="bg-[url('/landingImage.jpg')] relative bg-no-repeat bg-center bg-cover sm:h-56 lg:h-80 rounded-md intro-content">

                    <div className="text-center text-white sm:pt-16 md:pt-20 font-bold capitalize intro-text">
                        <p className=" text-sm">
                            helping others
                        </p>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl uppercase">
                            live & travel
                        </h2>
                        <p className="text-xs normal-case">
                            special offer to suit your plan
                        </p>
                    </div>

                    <div className="absolute sm:h-56 lg:my-20 rounded-lg bg-white shadow-md book-ticket">

                        <div className="flex flex-row w-1/2 h-11 p-2.5 nav">
                            <h1 className="flex flex-row mx-4 h-6 text-xs mt-2.5 hover:border-b-2 border-black capitalize text-black"><span><img className="w-3 mr-5 my-1"  src="/plane.png" alt="" /></span> flight</h1>

                            <h1 className="flex flex-row mx-3 mt-2.5 h-6 text-xs hover:border-b-2 border-black capitalize text-black"><span><img className="w-3 mr-5 my-1" src="/bed.png" alt="" /></span> stays</h1>
                        </div>

                        <div className="relative text-xs mx-3 py-3 intro-info">

                            <form className="flex flex-wrap justify-between">
                                <div className="relative w-auto h-auto m-2">
                                <label className="absolute left-3" htmlFor="from-to">from-to</label>
                                <input className="shadow-md w-36 h-6 mt-2" type="text" />
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
                                    <input className="shadow-md w-36 h-6 mt-2" type="text" />
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

            <div className=" intro-trip">

                <div className="trip-text flex flex-wrap justify-between mb-3 capitalize">
                    <div className="text-left text capitalize">
                        <h2 className="">
                            plan your perfect trip
                        </h2>
                        <p className="">
                            Search Flights & Places Hire to our most popular destinations
                        </p>
                    </div>
                    <button className="px-1 py-2 border-2 border-green-400 rounded-md capitalize sm:mr-3 ">
                        see more Places
                    </button>
                </div>

                <div className="flex flex-row flex-wrap justify-evenly places-details">
                    {places ? (
                        places.map((place) => (
                            <div className="basis-28 sm:basis-44 md:basis-52 h-16 shadow-md rounded-md mx-4 my-3 flex flex-row place-content" key={place.id}>
                                <img className="w-2/5 sm:w-1/3" src={place.image} alt="" />
                                <p className="text-center text-sm">{place.text}</p>
                            </div> 
                        ))
                    ) : (
                        <div>{error}</div>
                    )}
                </div>

            </div>

            <div className="flex flex-wrap justify-center place-type">

                <div className="basis-80 h-80 md:h-96 mx-4 md:mx-7 rounded-lg my-2 md:basis-2/5 bg-black bg-[url('/stays.jpg')] relative bg-no-repeat bg-center bg-cover">
                    <div className="absolute bottom-3 text-center w-full text-white px-8 div-text">
                        <p className="text-3xl">Flights</p>
                        <p className="text">Search Flights & Places Hire to our most popular destinations</p>
                        <button className="rounded-md px-2 py-1 bg-green-500 text-black outline-none border-none">show flights</button>
                    </div>
                </div>

                <div className="basis-80 h-80 md:h-96 mx-4 md:mx-7 rounded-lg my-2 md:basis-2/5 bg-black bg-[url('/flight.jpg')] relative bg-no-repeat bg-center bg-cover">
                    <div className="absolute bottom-3 text-center w-full text-white px-8 div-text">
                        <p className="text-3xl">Hotels</p>
                        <p className="text">Search hotels & Places Hire to our most popular destinations</p>
                        <button className="rounded-md px-2 py-1 bg-green-500 text-black outline-none border-none">show hotels</button>
                    </div>
                </div>

            </div>

            <div className="h-auto feedbacks">
                    {
                        feedbacks ? (
                            <div className="overflow-x-auto flex space-x-0 p-4">
                                {
                                    feedbacks.map((feedback) => (
                                        <div className="flex-none basis-60 h-72 sm:basis-72 sm:h-96 overflow-hidden mx-2 relative rounded-xl shadow-md text-left text-xs shadow-green-200 text-black p-4 feddback-display" key={feedback.id}>
                                            <div className="my-2 content">
                                                <h3 className="font-bold text-sm py-2">{feedback.title}</h3>
                                                <p className="w-full h-14 py-3 pr-1 overflow-hidden">{feedback.body}</p>
                                            </div>
                                            <div className="font-semibold my-3 content-source">
                                                <h5> {feedback.author} </h5>
                                                <p> {feedback.location} </p>
                                            </div>
                                            <img className="w-full rounded-b-md" src={feedback.image} alt={feedback.author} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div> {error} </div>
                        )
                    }
            </div>
        </div>
     );
}
 
export default Home;
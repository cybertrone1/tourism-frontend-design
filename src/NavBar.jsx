import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="flex flex-row justify-between w-full h-12 shadow-md bg-white visible Navbar">
            <section className="flex flex-row flex-nowrap justify-between w-3/4 sm:w-1/2  h-10 text-white my-1">
                <div className="flex flex-row flex-wrap mx-3">

                    <Link to="/flight-flow"> 
                        <h1 className="flex flex-row mx-3 text-xs leading-10 capitalize text-black"><span><img className="w-3 mx-2 my-3.5" src="/plane.png" alt="" /></span> find flight</h1>
                    </Link>

                    <Link to="/">
                        <h1 className="flex flex-row mx-3 text-xs leading-10 capitalize text-black"><span><img className="w-3 mx-2 my-3.5" src="/bed.png" alt="" /></span> find stays</h1>
                    </Link>

                </div>
                <div>
                    <h1 className=" flex-row leading-10 visible hidden sm:flex text-black font-bold">gl<span><img className="w-6 my-2" src="/logo.png" alt="" /></span>be</h1>
                </div>
            </section>
            <section className="w-1/4 md:w-2/12 h-10 my-1">
                <button className="px-3 py-1 text-xs capitalize bg-transparent border-none outline-none mx-1 my-2">login</button>
                <button className="px-3 py-1 text-xs capitalize hidden sm:inline-block bg-black text-white border-none outline-none mx-1 my-2 rounded-md">sign in</button>
            </section>
        </div>
     );
}
 
export default NavBar;
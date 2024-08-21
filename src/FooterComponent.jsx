import { Link } from "react-router-dom";
const FooterComponent = () => {
    return ( 
        <div className="relative w-full mt-44 sm:mt-56 footer">
            <div className="flex flex-row flex-nowrap bg-green-200 px-2 absolute bottom-44 rounded-lg justify-between py-4 footerAds">
                <div className="w-3/4 text">
                    <p className="w-12">
                        Subscribe Newsletter
                    </p>
                    <div className="py-4 innertext">
                        <p className="text-xs text-slate-500">
                            The Travel
                        </p>
                        <p className="text-sm text-slate-500 p">
                            Get inspired! Receive travel discounts, tips and behind the scenes stories.
                        </p>
                    </div>
                    <form>
                        <input type="text"
                            placeholder="your email address"
                            required
                            className="shadow-sm shadow-slate-500 mr-6 py-1"
                        />
                        <button className="rounded-md px-1 py-1 bg-slate-800 text-white outline-none border-none">Subscribe</button>
                    </form>
                </div>
                <img className="sm:block hidden w-1/6" src="/postMail.png" alt="mail image" />
            </div>
            <div className="flex flex-row justify-between pt-28 flex-wrap w-full h-64 bg-green-400 footerLinks">
                <div className="w-1/6 logos">
                    <h1 className=" flex-row leading-10 sm:px-6 md:mx-12 flex text-black font-bold">gl<span><img className="w-6 my-2" src="/logo.png" alt="" /></span>be</h1>
                    <div className="flex flex-row flex-nowrap p-1 justify-evenly w-full mediaLinks">
                        <Link className="basis-5" to="#">
                            <img src="/facebook.png" alt="facebook" />
                        </Link>
                        <Link className="basis-5" to="#">
                            <img src="/youtube.png" alt="youtube" />
                        </Link>
                        <Link className="basis-4" to="#">
                            <img src="/x.png" alt="x" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly w-3/4 flex-wrap footerGoal">
                    <div className="text-left text-xs">
                        <h2 className="font-bold text-sm">Our Destinations</h2>
                        <ul className="list-none">
                            <li>Canada</li>
                            <li>Alaksa</li>
                            <li>France</li>
                            <li>Iceland</li>
                        </ul>
                    </div>
                    <div className="text-left text-xs">
                        <h2 className="font-bold text-sm">Our Activities</h2>
                        <ul className="list-none">
                            <li>Northern Lights</li>
                            <li>Cruising & sailing</li>
                            <li>Multi-activities</li>
                            <li>Kayaing</li>
                        </ul>
                    </div>
                    <div className="text-left hidden sm:block text-xs">
                        <h2 className="font-bold text-sm">Travel Blogs</h2>
                        <ul className="list-none">
                            <li>Bali Travel Guide</li>
                            <li>Sri Lanks Travel Guide</li>
                            <li>Peru Travel Guide</li>
                            <li>Bali Travel Guide</li>
                        </ul>
                    </div>
                    <div className="text-left hidden md:block text-xs">
                        <h2 className="font-bold text-sm">About Us</h2>
                        <ul className="list-none">
                            <li>Our Story</li>
                            <li>Work with us</li>
                        </ul>
                    </div>
                    <div className="text-left text-xs">
                        <h2 className="font-bold text-sm">Contact Us</h2>
                        <ul className="list-none">
                            <li>Our Story</li>
                            <li>Work with us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterComponent;
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" flex flex-col justify-center py-4 border-t "id="footer">
      <div className="flex flex-col md:flex-row gap-8 justify-between bg-neutral text-neutral-content items-center py-6 px-16">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current mb-2"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            <b>Event Venue</b> - Premium Audi, IPS Academy, Institute of Engineering and Science, Rajendra Nagar, Indore, 452012
          </p>
          <p className="py-2">
            <b>Event Date</b> - 08 August 2024
            <br />
            <b>Time</b> - 2PM
          </p>
        </aside>
        <nav className="flex justify-between item-center gap-6">
          <Link
            to="https://www.instagram.com/bad.talks2024/"
            className="h-11 w-11 relative  rounded-xl group "
          >
            <div className="h-full w-full absolute  group-hover:bg-white/40 group-hover:backdrop-blur-sm transition-all duration-300 rounded-xl z-10 flex items-center justify-center">
              <FaInstagram className="text-2xl" />
            </div>
            <div className="h-full w-full  rounded-xl absolute transition-all duration-300 bg-gradient-to-tr from-orange-500 to-pink-500 group-hover:rotate-[35deg] origin-bottom  "></div>
          </Link>

          <Link
            to="https://chat.whatsapp.com/FYzPkqLqZ9v0vzBLSnuBm6"
            className="h-11 w-11 relative  rounded-xl group "
          >
            <div className="h-full w-full absolute  group-hover:bg-white/40 group-hover:backdrop-blur-sm transition-all duration-300 rounded-xl z-10 flex items-center justify-center">
              <FaWhatsapp  className="text-2xl" />
            </div>
            <div className="h-full w-full  rounded-xl absolute transition-all duration-300 bg-gradient-to-tr from-green-500 to-green-700 group-hover:rotate-[35deg] origin-bottom  "></div>
          </Link>

          <Link
            to="/"
            className="h-11 w-11 relative  rounded-xl group "
          >
            <div className="h-full w-full absolute  group-hover:bg-white/40 group-hover:backdrop-blur-sm transition-all duration-300 rounded-xl z-10 flex items-center justify-center">
              <BsTwitterX  className="text-xl" />
            </div>
            <div className="h-full w-full  rounded-xl absolute transition-all duration-300 bg-gradient-to-tr from-neutral-800 to-neutral-700 group-hover:rotate-[35deg] origin-bottom  "></div>
          </Link>
        </nav>
      </div>
      <p className="text-center  ">Made with ❤️ by B.A.D. Talks Tech Team</p>
    </footer>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Link2 } from "lucide-react";
import event from "../../assets/front.png";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function Landing() {
  const navigate = useNavigate();

  // List of names to display
  const names = [
    "Shivanshi just registered...",
    "Ravi just registered...",
    "Shishir just registered...",
    "Khushi just registered...",
    "Shivanshi just registered...",
    "Bharat just registered...",
    "Ravi just registered...",
    "Anant just registered...",
    "Devanshi just registered...",
    "Savan just registered...",
    "Palak just registered...",
    "Aniket just registered...",
    "Ravi just registered...",
    "Shivanshi just registered...",
    "Jeny just registered...",
    "Anurag just registered...",
    "Poonam just registered...",
    "Tanisha just registered...",
    "Ravi just registered...",
    "Shivanshi just registered...",
    "Aadeesh just registered...",
    "Tanishq just registered...",
    "Ravi just registered...",
    "Vishal just registered...",
    "Shivanshi just registered...",
    "Hardik just registered...",
  ];

  // Ref for the random names element
  const randomNamesRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: names,
      typeSpeed: 50,
      loop: true,
      showCursor: false,
      backDelay: 1500,
    };

    if (randomNamesRef.current) {
      const typed = new Typed(randomNamesRef.current, options);

      return () => {
        // Destroy Typed instance during cleanup to prevent memory leaks
        typed.destroy();
      };
    }
  }, [names]);

  return (
    <>
      <div
        id="home"
        className="overflow-hidden flex flex-col px-4 md:flex-row gap-12 items-center md:items-start md:justify-center justify-start h-full md:h-[95vh] w-full relative"
      >
        <span className="text-white/10 text-9xl hidden md:block absolute top-[10%] left-36 font-extrabold">
          BAD
        </span>
        <span className="text-white/10 text-9xl hidden md:block absolute top-1/3 right-24 font-extrabold">
          TALK
        </span>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full mx-auto md:h-80 md:w-auto aspect-video relative mt-24">
            <span className="h-[1px] w-24 bg-white absolute -top-4 -right-6"></span>
            <img src={event} alt="Event" className="h-full w-auto absolute" />
            <span className="h-[1px] w-24 bg-white absolute -bottom-4 -left-6"></span>
          </div>
          <p className="text-red-500 text-center mt-4">Free event, open to everyone!</p>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <Dialog>
              <DialogTrigger>
                <div className="register-button self-center">
                  REGISTER NOW
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="register-icon"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </DialogTrigger>
              <DialogContent
                onInteractOutside={(e) => {
                  e.preventDefault();
                }}
                className="bg-black/10  md:px-6 max-w-xs md:max-w-md backdrop-blur-md rounded-3xl flex flex-col items-center justify-center mt-6 p-2"
              >
                <DialogTitle className="text-red-600 font-semibold text-3xl py-4">
                  Register
                </DialogTitle>
                <RegisterForm Element={DialogClose} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="md:absolute md:bottom-44 md:left-4 lg:left-24 h-40 w-full md:w-96">
          <ArrowRight size={50} className="-rotate-45" />
          <h3 className="pl-3 font-semibold text-xl">
            Venue : Premium Audi, IPS Academy, Institute of Engineering and Science, <br /> Rajendra Nagar, Indore,
            Madhya Pradesh, 452012{" "}
          </h3>
        </div>
        {/* card */}
        <div className="h-full md:h-32 p-4 mb-40 md:mb-0 w-full md:w-96 bg-white rounded-3xl md:absolute relative md:right-4 lg:right-24 md:bottom-44">
          <h3 className="text-black font-semibold text-xl">Welcome...</h3>
          <p className="text-red-500 md:max-w-[310px] mt-2 text-lg font-medium leading-tight max-w-[230px]">
            <span className="text-black/40 md:max-w-[310px] mt-2 text-lg font-medium leading-tight max-w-[230px]">
              Be part of something extraordinary-
            </span>
            Reserve Your Seat Today! <br />
            <span
              className="text-black/80 md:max-w-[310px] mt-2 text-lg font-medium leading-tight max-w-[230px] random_names mb-2"
              id="random_names"
              ref={randomNamesRef}
            >
              {names[0]}
            </span>
          </p>
          <div className="absolute h-16 w-16 bottom-0 rounded-tl-[30px] -right-4 flex items-center justify-center bg-black">
            <a href="/speakers">
              <Link2
                size={44}
                color="black"
                className="bg-white p-3 rounded-full mt-1"
              />
            </a>
            <div className="h-4 w-4 bg-black bottom-0 absolute -left-4">
              <div className="h-4 w-4 bg-white rounded-br-3xl absolute -left-0 bottom-0"></div>
            </div>
            <div className="h-4 w-4 bg-black -top-4 absolute right-4">
              <div className="h-4 w-4 bg-white rounded-br-3xl absolute -left-0 bottom-0"></div>
            </div>
          </div>
        </div>

        {/* //footer */}
        <div className='absolute bottom-0 h-24 w-full bg-white  left-0 right-0'>
            <div className='relative h-full w-full'>
                <div className='h-24 absolute w-24 rounded-full bg-black  -top-1/2 right-1/2 translate-x-1/2'>
                <a href='#whatisbad' className='absolute border-2 border-white cursor-pointer z-40 rounded-2xl flex items-center h-12 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2'>
                    <ChevronDown size={30} className='animate-bounce duration-1000 '/>
                </a>
                <div className='relative h-full w-full'>
                    <div className='absolute h-4 w-12 border-white border-b border-r bg-black top-1/2 right-1/2 translate-x-[195%]'>

                    </div>
                    <div className='absolute h-12 w-12 bg-white top-1/2 right-1/2 rounded-tl-2xl translate-x-[195%]'>

                    </div>

                    <div className='absolute h-4 w-12 bg-black border-white border-b border-l top-1/2 right-1/2 -translate-x-[95%]'>

                    </div>
                    <div className='absolute h-12 w-12 bg-white top-1/2 right-1/2 rounded-tr-2xl -translate-x-[95%]'>

                    </div>

                </div>
                
              

                </div>
                

            </div>
        </div>
      </div>
    </>
  );
}

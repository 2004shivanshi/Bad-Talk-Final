import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import logo from "../../assets/logo.webp";
import RegisterForm from "../RegisterForm/RegisterForm";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { AlignCenter, AlignJustify, X } from "lucide-react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-4 px-8 h-20 sticky top-0 z-[999999]  items-center">
      <div className="Nav_left">
       <a href="/#home">  <img src={logo} alt="Logo"  /></a>
      </div>
      <div
        className={`hidden md:flex gap-6 rounded-full  bg-white/10 backdrop-blur-md py-4 px-12 ${
          isOpen ? "open" : ""
        }`}
      >
        <a
          href="/#home"
          className="text-white font-semibold hover:text-red-600"
        >
          Home
        </a>
        <a href="/#why-attend" className="text-white font-semibold hover:text-red-600">
          Why Attend?
        </a>
        <a
          href="/#about"
          className="text-white font-semibold hover:text-red-600"
        >
          About Us
        </a>
        <a
          href="/speakers"
          className="text-white font-semibold hover:text-red-600"
        >
          Speakers
        </a>
        
        <a
          href="/ourteam"
          className="text-white font-semibold hover:text-red-600"
        >
          Team
        </a>

        <a
          href="/internship"
          className="text-white font-semibold hover:text-red-600"
        >
          Internship
        </a>
        <a
          href="/#footer"
          className="text-white font-semibold hover:text-red-600"
        >
          Contact Us
        </a>
      </div>

      <div className="Nav_right">
        <Dialog>

          <DialogTrigger>
            <div className="register-button">
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
          <DialogContent onInteractOutside={(e) => {
          e.preventDefault();
        }} className="bg-black/10 px-4 md:px-24 max-w-xs md:max-w-md backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
            <DialogTitle className="text-red-600 font-semibold text-3xl py-4">
              Register
            </DialogTitle>
            <RegisterForm Element={DialogClose} />
          </DialogContent>
        </Dialog>
      </div>

      <Sheet>
        <SheetTrigger asChild className="block md:hidden">
          <AlignJustify size={28} />
        </SheetTrigger>
        <SheetContent className=" bg-black border p-2 m-0 z-[999999999999] w-full">
          <div className="  text-black h-full w-full flex items-start justify-start py-12 relative">
            <SheetClose asChild>
              <X color="white" size={28} className=" absolute right-4 top-2" />
              </SheetClose>
            <div className="flex flex-col gap-4 items-center w-full mt-8 ">
              <a
                href="/#home"
                className="text-white text-2xl font-semibold hover:text-red-600"
              >
                Home
              </a>

              <SheetClose asChild>
              <a
                href="/#bad"
                className="text-white text-2xl font-semibold hover:text-red-600"
              >
                Why Attend?
              </a>
              </SheetClose>
             
              <SheetClose asChild>
              <a
                href="/#about"
                className="text-white text-2xl font-semibold hover:text-red-600"
              >
                About Us
              </a>
              </SheetClose>
              <SheetClose asChild>
              <a
                href="/speakers"
                className="text-white text-2xl font-semibold hover:text-red-600"
              >
                Speakers
              </a>
              </SheetClose>
              
              <SheetClose asChild>
              <a
                href="/ourteam"
                className="text-white text-2xl font-semibold hover:text-red-600"
              >
                Team
              </a>
              </SheetClose>
              <SheetClose asChild>
              <a
                href="/#footer"
                className="text-white  text-2xl font-semibold hover:text-red-600"
              >
                Contact Us
              </a>
              </SheetClose>
{/* 
              <SheetClose asChild>
              <div className="register-button">
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
              </SheetClose> */}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Navbar;
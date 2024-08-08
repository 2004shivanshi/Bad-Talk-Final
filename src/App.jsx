import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import EventDetails from "./component/EventDetails/EventDetails";


import RegisterForm from "./component/RegisterForm/RegisterForm";
import "./App.css";
import Landing from "./component/Landing/Landing";

import NewSection from "./component/NewSection";
import OurSpeaker from "./component/OurSpeaker";
import AboutUs from "./component/AboutUs/About";
import Team from "./component/team/Team";
import Ticket from "./component/Ticket/Ticket";
import About from "./component/About/About";
import WhatisBad from "./component/Whatisbad/WhatIsBad";
import Map from "./component/Map";


import Internship from "./component/Career/Career";



function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("section, img:not(.no-fade)");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="app bg-black ">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <WhatisBad/>
            <AboutUs />
            <NewSection />
            <Map />
            <Footer />
          </>
        } />         
        {/* <Route path="/speakers" element={<OurSpeaker />} /> */}
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/ourteam" element={<Team />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/:id" element={<Ticket />} />
        <Route path="/internship" element={<Internship/>} />
      </Routes>
    </div>
  );
}

export default App;
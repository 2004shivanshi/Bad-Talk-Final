import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventDetails.css";
import event from "../../assets/front.png"

function EventDetails() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <section className="event_details">
      {/* <div className="breakdown">
        <h1>
          BREAKDOWN <span className="analysis">ANALYSIS</span>
        </h1>
        <h1 className="decision">DECISION</h1>
      </div> */}
      <img src={event} alt="Event" />
      <p>
        <b>Event Venue</b> - Premium Audi, IPS Academy, Institute of Engineering and Science, Rajendra Nagar, Indore
      </p>
      <p>
        <b>Event Date</b> - 08 August 2024
      </p>
      <button onClick={handleRegister}>Register</button>
    </section>
  );
}

export default EventDetails;

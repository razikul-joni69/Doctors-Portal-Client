import React from "react";
import Calendar from "react-calendar";
import Chair from "../../../images/chair.png";
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <div className="container">
            <main
                style={{ height: "545px" }}
                className="row align-items-center"
            >
                <div className="col-md-5 align-items-start">
                    <h1 style={{ color: "#3A4256" }}>Appointment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img src={Chair} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;

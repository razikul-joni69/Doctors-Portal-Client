import React from "react";
import Doctor from "../../../images/doctor.png";
import "./MakeAnAppointment.css";

const MakeAnAppointment = () => {
    return (
        <div className="appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="doctor-image" src={Doctor} alt="" />
                    </div>
                    <div className="col-md-7">
                    <div className="text-white">
                        <h5 className="text-uppercase mt-5">appointment</h5>
                        <h1 className="mt-4">Make an appointment Today</h1>
                        <p className="mt-4 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis labore tenetur explicabo dolorum aspernatur? </p>
                        <div className="btn learnMore-btn">Learn More</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAnAppointment;

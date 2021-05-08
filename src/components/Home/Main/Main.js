import React from "react";
import Chair from "../../../images/chair.png";
const Main = () => {
    return (
        <div className="container">
            <main
                style={{ height: "545px" }}
                className="row align-items-center"
            >
                <div className="col-md-5 align-items-start">
                    <h1 style={{ color: "#3A4256" }}>
                        Your new smile <br /> starts here
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem in voluptatem recusandae tenetur ratione? Maxime
                        inventore iusto eos.
                    </p>
                    <button  className="btn-brand">
                        GET APPOINTMENT
                    </button>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img src={Chair} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default Main;

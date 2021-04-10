import React from "react";
import FeatureServices from "../FeatureServices/FeatureServices";
import Header from "../Header/Header";
import MakeAnAppointment from "../MakeAnAppointment/MakeAnAppointment";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Header />
            <Services/>
            <FeatureServices/>
            <MakeAnAppointment/>
        </div>
    );
};

export default Home;

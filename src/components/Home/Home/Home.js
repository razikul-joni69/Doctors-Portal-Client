import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Doctors from "../Doctors/Doctors";
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
            <Doctors/>
            <Footer/>
        </div>
    );
};

export default Home;

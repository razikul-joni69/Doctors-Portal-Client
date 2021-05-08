import React from "react";
import DoctorsCard from "../DoctorsCard/DoctorsCard";

const Doctors = () => {
    const [doctors, setDoctors] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:5000/doctors")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);
    return (
        <div className="container">
            <h1 className="text-center mb-5">Our Doctors</h1>
            <div className="row">
                {doctors.map((doctor) => (
                    <DoctorsCard key={doctor._id} doctor={doctor}></DoctorsCard>
                ))}
            </div>
        </div>
    );
};

export default Doctors;

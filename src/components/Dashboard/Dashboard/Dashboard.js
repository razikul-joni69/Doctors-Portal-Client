import React from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [appointments, setAppointments] = React.useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date)
    };

    React.useEffect(() => {
        fetch("http://localhost:5000/appointmentsByDate", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({date: selectedDate})
        })
            .then((res) => res.json())
            .then((date) => setAppointments(date));
    },[selectedDate])
    return (
        <div>
            <NavigationBar/>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
 
const appointmentData = [
    
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 PM',
        seats: '10 Spaces Available',
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:00 PM',
        seats: '10 Spaces Available',
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        time: '8:00 AM - 9:00 PM',
        seats: '10 Spaces Available',
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        time: '8:00 AM - 9:00 PM',
        seats: '10 Spaces Available',
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 PM',
        seats: '10 Spaces Available',
    },
    {
        id: 6,
        subject: 'Teath Cleaning',
        time: '8:00 AM - 9:00 PM',
        seats: '10 Spaces Available',
    },
    
]
const BookAppointment = ({date}) => {
    return (
        <section className="container">
            <h1 className="mb-5">Available Appointment on {date.toDateString()}</h1>
            <div className="row">
                {
                    appointmentData.map(appointment => <AppointmentCard key={appointment.id} appointment={appointment} date={date}></AppointmentCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;
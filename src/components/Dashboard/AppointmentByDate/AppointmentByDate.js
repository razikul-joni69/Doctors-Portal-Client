import React from 'react';

const AppointmentByDate = ({appointments}) => {


    return (
        <div>
            <h1>length {appointments.length}</h1>
            {
                appointments.map(appointment => <li>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;
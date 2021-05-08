import React from "react";
import { Button, Card } from "react-bootstrap";
import AppointmentForm from "../AppointmentForm/AppointmentForm"
const AppointmentCard = ({ appointment , date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Card className="col-md-4 mb-3" style={{}}>
            <Card.Body className="text-center">
                <Card.Title>{appointment.subject}</Card.Title>
                <Card.Subtitle className="mb-2 ">{appointment.time}</Card.Subtitle>
                <Card.Text className="text-muted">
                    {appointment.seats}
                </Card.Text>
                <Button onClick={openModal} className="btn-brand text-uppercase">book appointment</Button>
            </Card.Body>
            <AppointmentForm appointmentOn={appointment.subject} modalIsOpen={modalIsOpen} closeModal={closeModal} date={date}></AppointmentForm>
        </Card>
    );
};

export default AppointmentCard;

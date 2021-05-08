import React from "react";
import { Card } from "react-bootstrap";
const DoctorsCard = ({ doctor }) => {
    return (
        <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={`data:image/png;base64,${doctor.image.img}`}
                />
                <Card.Body className="text-center">
                    <Card.Title >{doctor.name}</Card.Title>
                    <Card.Text className="text-secondary">{doctor.phone}</Card.Text>
                    <Card.Text className="text-secondary">{doctor.email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorsCard;

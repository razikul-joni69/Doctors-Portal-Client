import React from "react";
import { Button, Form } from "react-bootstrap";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import "./AddDoctor.css";

const AddDoctor = () => {
    const [info, setInfo] = React.useState({});
    const [file, setFile] = React.useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };
    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", info.name);
        formData.append("email", info.email);
        formData.append("phone", info.phone);

        fetch("http://localhost:5000/addDoctor", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <Form
                onSubmit={handleSubmit}
                className="col-md-10 w-100% form-containers"
                encType="multipart/form-data"
            >
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onBlur={handleBlur}
                        name="name"
                        type="text"
                        placeholder="Enter full name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={handleBlur}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        onBlur={handleBlur}
                        name="phone"
                        type="number"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.File id="formcheck-api-regular">
                        <Form.File.Input onChange={handleFileChange}></Form.File.Input>
                    </Form.File>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddDoctor;

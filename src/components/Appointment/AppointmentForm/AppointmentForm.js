import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "40%",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20px",
    },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ appointmentOn, modalIsOpen, closeModal, date }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch("http://localhost:5000/addAppointment", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    closeModal();
                    alert("appointment created successfully");
                }
            });
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center mt-3">{appointmentOn}</h2>
                {/* <p>{date}</p> */}
                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="gender"
                            aria-label="Default select example"
                        >
                            <option selected>Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>
                        </select>
                        {errors.gender && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            {...register("name", { required: true })}
                            placeholder="Your Name"
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            {...register("phone", { required: true })}
                            placeholder="Phone Number"
                        />
                        {errors.phone && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            {...register("email", { required: true })}
                            placeholder="Email"
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            {...register("date", { required: true })}
                            placeholder="dd/mm/yyyy"
                        />
                        {errors.date && <span>This field is required</span>}
                    </div>

                    <div className="text-right">
                        <input className="btn btn-primary " type="submit" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;

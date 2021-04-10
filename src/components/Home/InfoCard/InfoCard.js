import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";
const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 mb-3 text-white infoCard-container">
            <div
                className={`d-flex align-items-center justify-content-center p-2 rounded infoCard-container-inner bg-${info.background_color}`}
            >
                <div>
                    {<FontAwesomeIcon className="mr-3 icon" icon={info.icon}></FontAwesomeIcon>}
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;

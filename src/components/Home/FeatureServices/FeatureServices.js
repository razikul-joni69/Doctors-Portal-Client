import React from "react";
import FeatureImage from "../../../images/feature-image.png";

const FeatureServices = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <img style={{width: '100%', height: '500px'}} src={FeatureImage} alt="Feature" />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div>
                    <h1 className="text-capitalize">
                        exceptional dental care, <br /> on your tearms
                    </h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam ipsum modi, quos tempora illum laborum sed
                        dolor? Recusandae vel vero reprehenderit placeat
                        possimus rem ab, magni accusamus nesciunt saepe. Illum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores corporis laboriosam voluptates explicabo harum!
                        Animi autem, nam dolorem neque quisquam ab adipisci. Nam
                        culpa eos nemo fugiat molestiae quasi qui.{" "}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureServices;

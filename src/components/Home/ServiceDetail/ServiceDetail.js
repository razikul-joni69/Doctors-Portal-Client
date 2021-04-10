import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4">
            <img style={{width: '90px'}} src={service.img} alt=""/>
            <h5 className="my-4">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;
import React from 'react';
import Floride from '../../../images/floride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import './Services.css'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet est molestiae dignissimos pariatur sequi! ',
        img: Floride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet est molestiae dignissimos pariatur sequi! ',
        img: Cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet est molestiae dignissimos pariatur sequi! ',
        img: Whitening
    }
]
const Services = () => {
    return (
        <section className="container">
            <div className="service-heading">
                <h4 className="text-uppercase">our services</h4>
                <h1 className="text-capitalize">service we provide</h1>  
            </div>
            <div className="row">
                {
                    serviceData.map((service) => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;
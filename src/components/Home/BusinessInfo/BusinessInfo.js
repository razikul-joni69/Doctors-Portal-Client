import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are Open 7 days',
        icon: faClock,
        background_color: 'double'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 1400, USA.',
        icon: faMapMarkerAlt,
        background_color: 'single'
    },
    {
        title: 'Contuct Us Now',
        description: '+8801623208660',
        icon: faPhoneVolume,
        background_color: 'double'
    }
]
const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row">
            {
                infoData.map((info => <InfoCard info={info}></InfoCard>))
            }
            </div>
        </section>
    );
};

export default BusinessInfo;
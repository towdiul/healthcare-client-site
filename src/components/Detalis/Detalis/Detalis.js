import React from 'react';
import { useParams } from 'react-router';

const Detalis = () => {
    const {serviceId , name} = useParams();
    return (
        <div>
            <h2> this is detalis : {serviceId}</h2>
        </div>
    );
};

export default Detalis;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Courses = (props) => {
    const {id, name, img, price} = props.courses;
    return (
        
        <div className="col mb-2 ">
            <div className="card shadow  h-100 mx-2">
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title bg-secondary p-2 rounded">{name}</h3>
                    <h5><span>Price</span>:$ {price}</h5>
                    <p className="card-text text-start"><span>We</span>strive to eliminate health disparities for everyone, facing any type of cancer, from every race and socio-economic background.  We stand ready to help and want to assure the community that we have zero tolerance for racial injustice. Our mission is to “Enhance Health, Life and Survivorship” and we will work to fulfill our mission while encouraging compassion and understanding in all of our pursuits.</p>
                    <Link to={`/detalis/${id}`}>
                    <button className="btn btn-danger px-4" >Details</button>
                    </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Courses;
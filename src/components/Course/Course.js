import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setCourse(data));
    }, [])
    return (
        <div  >
            <h2><span>Our</span> Services : {course.length}</h2>
            <hr/>
            <div class="row row-cols-1 row-cols-md-3 mb-5 g-4">
                {
                    course.map(courses => <Courses courses={courses}>
                        
                        
                    </Courses>)
                }
            </div>
        </div>
    );
};

export default Course;
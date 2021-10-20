import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import Courses from "../Courses/Courses"

const Home = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setCourse(data));
    }, [])
    const sliced = course.slice(0,4);
    console.log(sliced)
    return (
        <div>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block  w-100"
      src="https://image.freepik.com/free-photo/closeup-shot-boy-getting-checkup-by-doctor_181624-34747.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Health Care Club</h3> 
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=338&ext=jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>Health Care Club</h3> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>Health Care Club</h3> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <h2 className="p-5 pb-2"><span>Our Best</span> Service</h2><hr className="w-50 shadow mx-auto"/>
        <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 mt-2">
            
                {
                    sliced.map(courses => <Courses courses={courses}>
                        
                        
                    </Courses>)
                }
            
        </div>
        </div>
    );
};

export default Home;
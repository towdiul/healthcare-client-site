import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import Services from "../Services/Services"

const Home = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setService(data));
    }, [])
    const sliced = service.slice(0,6);
    console.log(sliced)
    return (
        <div>
        <Carousel className="mt-0 pt-0  h-75">
  <Carousel.Item interval={1000}>
    <img
      className="d-block  w-100"
      src="https://tandemallied.com/fileadmin/_processed_/9/8/csm_Commerz2-2_3aed32a352.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Health Care </h3> 
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=338&ext=jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>Health Care </h3> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>Health Care </h3> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <h2 className="p-5 pb-2"><span>Our Best</span> Service</h2><hr className="w-50 shadow mx-auto"/>
        <div class="row row-cols-1 row-cols-md-6 g-4 mb-4 mt-2 w-100">
            
                {
                    sliced.map(services => <Services services={services}>
                        
                        
                    </Services>)
                }
            
        </div>
        </div>
    );
};

export default Home;
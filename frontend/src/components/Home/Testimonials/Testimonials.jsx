import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import { TK, CL, SK } from './quotes';


const Testimonials = () => {
  const rightArrowStyle = {
    fontSize: '5em',
    color: '#000',
    marginRight: '10vw',
    marginTop: '50vh',
    position: 'absolute'
  }

  const rightArrow = <ArrowForwardIcon style={rightArrowStyle} />;

  return (
    <div id="testimonials-page" className="halfscreen">
      <h1 id="testimonials-title" className="header-text muli">
        <Link to="/testimonials">T E S T I M O N I A L S</Link>
      </h1>
      <Carousel nextLabel={null} prevLabel={null} interval={null} indicators keyboard slide wrap touch nextIcon={null} prevIcon={null}>
        <Carousel.Item className="carousel-item">
          <h3>{TK.head}</h3>
          <p>{TK.para}</p>
          <img src={TK.img} alt="teri-kelly-photo" width="100" height="100" />
          <span>{TK.spn}</span>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <h3>{CL.head}</h3>
          <p>{CL.para}</p>
          <img src={CL.img} alt="teri-kelly-photo" width="100" height="100" />
          <span>{CL.spn}</span>
       </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <h3>{SK.head}</h3>
        <p>{SK.para}</p>
        <img src={SK.img} alt="teri-kelly-photo" width="100" height="100" />
        <span>{SK.spn}</span>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
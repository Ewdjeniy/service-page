import React from "react";
import ReactDOM from 'react-dom';
import Slider from './react-animated-slider/build';
import './react-animated-slider/build/horizontal.css';
import './slider.css';

class Slide extends React.Component {
  render() {
    return (
      <section>
        <Slider
          previousButton={
            <div className="arrow_bg">
              <div className="leftArrow"></div>
            </div>
          }
          nextButton={
            <div className="arrow_bg">
              <div className="rightArrow"></div>
            </div>
          }
        >
          <div>
            <div className="banner_description">
              <h2 className="The_Best_Services">The Best Services #1</h2>
              <p className="We_provide_the_best_services_in_the_world_We_pr">We provide the best services in the world We provide the best services in the world We provide the best services in the world</p>
              <a className="Hire_US" href="#">Hire us</a>
            </div>
          </div>
          <div>
            <div className="banner_description">
              <h2 className="The_Best_Services">The Best Services #2</h2>
              <p className="We_provide_the_best_services_in_the_world_We_pr">We provide the best services in the world We provide the best services in the world We provide the best services in the world</p>
              <a className="Hire_US" href="#">Hire us</a>
            </div>
          </div>
          <div>
            <div className="banner_description">
              <h2 className="The_Best_Services">The Best Services #3</h2>
              <p className="We_provide_the_best_services_in_the_world_We_pr">We provide the best services in the world We provide the best services in the world We provide the best services in the world</p>
              <a className="Hire_US" href="#">Hire us</a>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default Slide;
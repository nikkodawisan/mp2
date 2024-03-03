import React from 'react';
import Slider1 from '../images/sample1.jpg'; 
import Slider2 from '../images/sample2.jpg'; 
import Slider3 from '../images/sample3.jpg'; 


function Slider() {
    return (
  <div id="carouselExampleDark" className="carousel carousel-light slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">

    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Slider1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Experience Our Great Service</h5>
        <p className='homeSlider'>We assure that our customers will get 100% satisfaction.</p>
      </div>

    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Slider2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Old and new style for your hair.</h5>
        <p className='homeSlider'>Wanted to try the new trends or the retros? we got you!</p>
      </div>

    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Sit back and chill.</h5>
        <p className='homeSlider'>Leave your worries, you are in good hands here at Candy Vault Salon & Spa!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Slider;
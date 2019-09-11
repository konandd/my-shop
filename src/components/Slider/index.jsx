import React from 'react';
import './Slider.css';

const Slider = () => (
  <div className="slider">
    <input type="radio" name="slider__check" className="slider__check" id="slider__check-1" defaultChecked />
    <label htmlFor="slider__check-1" className="slider__label">1</label>
    <img src="https://i2.rozetka.ua/owoxads/sliders/9/9818.png" alt="" className="slider__image" />
    <input type="radio" name="slider__check" className="slider__check" id="slider__check-2" />
    <label htmlFor="slider__check-2" className="slider__label">2</label>
    <img src="https://i2.rozetka.ua/owoxads/sliders/9/9728.jpg" alt="" className="slider__image" />
    <input type="radio" name="slider__check" className="slider__check" id="slider__check-3" />
    <label htmlFor="slider__check-3" className="slider__label">3</label>
    <img src="https://i2.rozetka.ua/owoxads/sliders/9/9674.jpg" alt="" className="slider__image" />
    <input type="radio" name="slider__check" className="slider__check" id="slider__check-4" />
    <label htmlFor="slider__check-4" className="slider__label">4</label>
    <img src="https://i2.rozetka.ua/owoxads/sliders/9/9644.jpg" alt="" className="slider__image" />
    <input type="radio" name="slider__check" className="slider__check" id="slider__check-5" />
    <label htmlFor="slider__check-5" className="slider__label">5</label>
    <img src="https://i2.rozetka.ua/owoxads/sliders/8/8916.jpg" alt="" className="slider__image" />
  </div>
);
export default Slider;

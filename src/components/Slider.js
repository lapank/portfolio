import './Slider.scss';
import '../styles/CodeGallery.scss';
import '../styles/VideoGallery.scss';
import '../index.scss';
import '../styles/VideoGallery.scss';
import {developmentSliderTitle} from './SliderData.js'
import VideoTitle from './VideoTitle.js';
import React, { useState } from 'react';


function text (title, text){
  document.getElementById("sampleTitle").innerHTML = title;
  document.getElementById("sampleText").innerHTML = text;
}

function Slider(props){
  const item = props.item;
  return(
    <div className="backgroundDark pb-5">
    <div className="container">
      <div className="row">
        <div className="col-5">
        <VideoTitle item={developmentSliderTitle}/>
        </div>
        <div className="col-7 sliderText gradientBackground">
        <h2 id="sampleTitle" className="sliderTitle">{item[0].title}</h2>
        <p id="sampleText" className="sliderBodyText">{item[0].text}</p>
        </div>
      </div>
    </div>
      <section id="slider">
      
      <input type="radio" name="slider" id="s1"onClick={() => { text(item[0].title, item[0].text);}}/>
      <input type="radio" name="slider" id="s2" onClick={() => { text(item[4].title, item[4].text);}}/>
      <input type="radio" name="slider" id="s3"onClick={() => { text(item[3].title, item[3].text);}}/>
      <input type="radio" name="slider" id="s4"onClick={() => { text(item[2].title, item[2].text);}}/>
      <input type="radio" name="slider" id="s5"onClick={() => { text(item[1].title, item[1].text);}}/>

      <label for="s1" id="slide1"></label>
      <label for="s2" id="slide2"></label>
      <label for="s3" id="slide3"></label>
      <label for="s4" id="slide4"></label>
      <label for="s5" id="slide5"></label>
    </section>
    </div>
    );
}


export default Slider;
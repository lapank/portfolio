import './Slider.scss';
import '../styles/CodeGallery.scss';
import '../styles/VideoGallery.scss';
import '../index.scss';
import '../styles/VideoGallery.scss';
import {developmentSliderTitle} from './SliderData.js'
import VideoTitle from './VideoTitle.js';
import React, { useState } from 'react';

import api from './images/color-api.png';
import menu from './images/mega-menu-indent-line.jpg';
import page from './images/race-to-the-moon-draft.jpg';
import test from './images/unit-tests.png';
import wireframe from './images/wireframe.png';


function text (){
  console.log("text function");
  let s1 = document.getElementById("s1").checked;
  let s2 = document.getElementById("s2").checked;
  let s3 = document.getElementById("s3").checked;
  let s4 = document.getElementById("s4").checked;
  let s5 = document.getElementById("s5").checked;

  switch(true) {
  case s1:
    console.log("h1");
    break;
  case s2:
    console.log("h2");
    break;
  case s3:
    console.log("h3");
    break;
  case s4:
    console.log("h4");
    break;
  case s5:
    console.log("h5");
    break;
  default:
  console.log("h1");
    break;
}
}

function SliderContent(props){
    return(
    <div>
      <div className="description">{props.title}</div>
      <div className="description">{props.text}</div>
    </div>
    );
}

function Slider(props){
  
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <SliderContent key={item.title}
      title = {item.title}
      text = {item.text}
 />
);
  console.log(item[1]);
  return(
    <div>
    <div className="container">
      <div className="row">
        <div className="col">
        <VideoTitle item={developmentSliderTitle}/>
        </div>
        <div className="col">
        {listItems}
        </div>
      </div>
    </div>
      <section id="slider">
      
      <input type="radio" name="slider" id="s1"onClick={() => { text();}}/>
      <input type="radio" name="slider" id="s2" onClick={() => { text();}}/>
      <input type="radio" name="slider" id="s3"onClick={() => { text();}}/>
      <input type="radio" name="slider" id="s4"onClick={() => { text();}}/>
      <input type="radio" name="slider" id="s5"onClick={() => { text();}}/>

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
import './Slider.scss';
import '../styles/CodeGallery.scss';
import '../styles/VideoGallery.scss';
import '../index.scss';
import '../styles/VideoGallery.scss';
import React, { useState } from 'react';

import api from './images/color-api.png';
import menu from './images/mega-menu-indent-line.jpg';
import page from './images/race-to-the-moon-draft.jpg';
import test from './images/unit-tests.png';
import wireframe from './images/wireframe.png';

/*function SliderContent(props){
  const [thumbnail, setThumbnail] = useState(props.image1);
  const [text, setText] = useState(props.text1);
  const [title, setTitle] = useState(props.title1);
  return (
    <div>
    <h2 className="headerText gradientText p-5">{props.header}</h2>
      <div className="row">
        <div className="col-md-4">
        

<div className="row videoThumbnail" onClick={() => {setThumbnail(props.image1); setText(props.text1); setTitle(props.title1)}}>
  <div style={{backgroundImage: `url("${props.image1}")`}} id="thumbnail1" className="col-3 videoThumbnailBox"></div>
  <div className="col-9 smallTitleLight">
  <div className="p-1 videoThumbnailText">
  <div className="row">{props.title1}</div>
  <div className="row bodyTextLight pt-2">{props.thumbnailText1}</div>
  </div>
  </div>
</div>
<div className="row videoThumbnail" onClick={() => {setThumbnail(props.image2); setText(props.text2); setTitle(props.title2)}}>
  <div style={{backgroundImage: `url("${props.image2}")`}} id="thumbnail1" className="col-3 videoThumbnailBox"></div>
  <div className="col-9 smallTitleLight">
  <div className="p-1 videoThumbnailText">
  <div className="row">{props.title2}</div>
  <div className="row bodyTextLight pt-2">{props.thumbnailText2}</div>
  </div>
  </div>
</div>
<div className="row videoThumbnail" onClick={() => {setThumbnail(props.image3); setText(props.text3); setTitle(props.title3)}}>
  <div style={{backgroundImage: `url("${props.image3}")`}} id="thumbnail1" className="col-3 videoThumbnailBox"></div>
  <div className="col-9 smallTitleLight">
  <div className="p-1 videoThumbnailText">
  <div className="row">{props.title3}</div>
  <div className="row bodyTextLight pt-2">{props.thumbnailText3}</div>
  </div>
  </div>
</div>
<div className="row videoThumbnail" onClick={() => {setThumbnail(props.image4); setText(props.text4); setTitle(props.title4)}}>
  <div style={{backgroundImage: `url("${props.image4}")`}} id="thumbnail1" className="col-3 videoThumbnailBox"></div>
  <div className="col-9 smallTitleLight">
  <div className="p-1 videoThumbnailText">
  <div className="row">{props.title4}</div>
  <div className="row bodyTextLight pt-2">{props.thumbnailText4}</div>
  </div>
  </div>
</div>
<div className="row videoThumbnail" onClick={() => {setThumbnail(props.image5); setText(props.text5); setTitle(props.title5)}}>
  <div style={{backgroundImage: `url("${props.image5}")`}} id="thumbnail1" className="col-3 videoThumbnailBox"></div>
  <div className="col-9 smallTitleLight">
  <div className="p-1 videoThumbnailText">
  <div className="row">{props.title5}</div>
  <div className="row bodyTextLight pt-2">{props.thumbnailText5}</div>
  </div>
  </div>
</div>


</div>
        <div className="col-md-8 overflow p-0">
          <div className="row">
              <div className="codeImage" style={{backgroundImage: `url("${thumbnail}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',backgroundPosition: 'center', height:700, width:1000}}></div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-12">
          <div className="gradientBackground codeGalleryText p-5">
            <h3 className="smallTitleDark">{title}</h3>
            <p className="bodyTextDark">{text}</p>
            </div>
            </div>
          </div>
      
    </div>
    </div>
  );
}

function Slider(props){
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <SliderContent key={item.title1}
      header = {item.header}
      title1 = {item.title1}
      image1 = {item.image1}
      thumbnailText1 = {item.thumbnailText1}
      text1 = {item.text1}
      title2 = {item.title2}
      image2 = {item.image2}
      thumbnailText2 = {item.thumbnailText2}
      text2 = {item.text2} 
      title3 = {item.title3}
      image3 = {item.image3}
      thumbnailText3 = {item.thumbnailText3}
      text3 = {item.text3} 
      title4 = {item.title4}
      image4 = {item.image4}
      thumbnailText4 = {item.thumbnailText4}
      text4 = {item.text4} 
      title5 = {item.title5}
      image5 = {item.image5}
      thumbnailText5 = {item.thumbnailText5}
      text5 = {item.text5} 
 />
  );
  return (
    <div className="p-5 backgroundDark">
    <div className="container-lg">
      {listItems}
    </div>
    </div>
  );
}*/

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
  return(
    <div>
      <section id="slider">
      {listItems}
      <input type="radio" name="slider" id="s1"/>
      <input type="radio" name="slider" id="s2"/>
      <input type="radio" name="slider" id="s3"/>
      <input type="radio" name="slider" id="s4"/>
      <input type="radio" name="slider" id="s5"/>

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
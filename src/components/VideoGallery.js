import '../index.scss';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';



function GalleryContent(props){
  const [thumbnail, setThumbnail] = useState(props.image1);
  const [text, setText] = useState(props.text1);
  const [title, setTitle] = useState(props.title1);
  const [video, setVideo] = useState(props.video1);
  return (
    <div>
    <h2 className="headerTextDark p-5">{props.header}</h2>
      <div className="row backgroundDark">
        <div className="col-md-8">
          <div className="row">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          
          <div className="row p-5 bodyTextDark backgroundLightest">
            <p className="smallTitleDark">{title}</p>
            <p className="bodyTextDark">{text}</p>
          </div>
        </div>
        <div className="col-md-4">

          <div className="row borderMedium backgroundLightest" onClick={() => {setThumbnail(props.image1); setText(props.text1); setTitle(props.title1); setVideo(props.video1)}}>
            <div style={{backgroundImage: `url("${props.image1}")`}} id="thumbnail1" className="col-6 thumbnailBox">
            <div className="centerAbsolute"><div className="gradientBackground playBackground"></div><AiIcons.AiFillPlayCircle className="playButton"/>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title1}</div>
          </div>
          <div className="row borderMedium backgroundLightest" onClick={() => {setThumbnail(props.image2); setText(props.text2); setTitle(props.title2); setVideo(props.video2)}}>
            <div style={{backgroundImage: `url("${props.image2}")`}} id="thumbnail1" className="col-6 thumbnailBox">
              <div className="centerAbsolute"><div className="gradientBackground playBackground"></div><AiIcons.AiFillPlayCircle className="playButton"/>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title2}</div>
          </div>              
          <div className="row borderMedium backgroundLightest" onClick={() => {setThumbnail(props.image3); setText(props.text3); setTitle(props.title3); setVideo(props.video3)}}>
            <div style={{backgroundImage: `url("${props.image3}")`}} id="thumbnail1" className="col-6 thumbnailBox">
              <div className="centerAbsolute"><div className="gradientBackground playBackground"></div><AiIcons.AiFillPlayCircle className="playButton"/>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title3}</div>
          </div>              
          <div className="row borderMedium backgroundLightest" onClick={() => {setThumbnail(props.image4); setText(props.text4); setTitle(props.title4); setVideo(props.video4)}}>
            <div style={{backgroundImage: `url("${props.image4}")`}} id="thumbnail1" className="col-6 thumbnailBox">
              <div className="centerAbsolute"><div className="gradientBackground playBackground"></div><AiIcons.AiFillPlayCircle className="playButton"/>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title4}</div>
          </div>             
          <div className="row borderMedium backgroundLightest" onClick={() => {setThumbnail(props.image5); setText(props.text5); setTitle(props.title5); setVideo(props.video5)}}>
            <div style={{backgroundImage: `url("${props.image5}")`}} id="thumbnail1" className="col-6 thumbnailBox">
              <div className="centerAbsolute"><div className="gradientBackground playBackground"></div><AiIcons.AiFillPlayCircle className="playButton"/>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title5}</div>
          </div>          
          </div>
        </div>
    </div>
  );
}

function Gallery(props){
    const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <GalleryContent key={item.title1}
      header = {item.header}
      title1 = {item.title1}
      image1 = {item.image1}
      text1 = {item.text1}
      video1 = {item.video1}
      title2 = {item.title2}
      image2 = {item.image2}
      text2 = {item.text2} 
      video2 = {item.video2}
      title3 = {item.title3}
      image3 = {item.image3}
      text3 = {item.text3} 
      video3 = {item.video3}
      title4 = {item.title4}
      image4 = {item.image4}
      text4 = {item.text4} 
      video4 = {item.video4}
      title5 = {item.title5}
      image5 = {item.image5}
      text5 = {item.text5} 
      video5 = {item.video5} />
  );
  console.log(item.video1);
  return (
    <div className="w-100 pt-5 pb-5 backgroundMedium">
      {listItems}
    </div>
  );
}


export default Gallery;
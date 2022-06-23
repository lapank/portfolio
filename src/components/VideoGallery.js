import './Slider.scss';
import React, { useState } from 'react';




function GalleryContent(props){
  const [thumbnail, setThumbnail] = useState(props.image1);
  const [text, setText] = useState(props.text1);
  const [title, setTitle] = useState(props.title1);
  const [video, setVideo] = useState(props.video1);
  console.log(video);
  return (
    <div>
      <div className="row">
        <div className="col-md-8 bg-light">
          <div className="row">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          
          <div className="row">
            <p>{text}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row" onClick={() => {setThumbnail(props.image1); setText(props.text1); setTitle(props.title1); setVideo(props.video1)}}>
            <div style={{backgroundImage: `url("${props.image1}")`}} id="thumbnail1" className="col-6 thumbnailBox"></div>
            <div className="col-6">{props.title1}</div>
          </div>
          <div className="row" onClick={() => {setThumbnail(props.image2); setText(props.text2); setTitle(props.title2); setVideo(props.video2)}}>
            <div style={{backgroundImage: `url("${props.image2}")`}} id="thumbnail1" className="col-6 thumbnailBox"></div>
            <div className="col-6">{props.title2}</div>
          </div>              
          <div className="row" onClick={() => {setThumbnail(props.image3); setText(props.text3); setTitle(props.title3); setVideo(props.video3)}}>
            <div style={{backgroundImage: `url("${props.image3}")`}} id="thumbnail1" className="col-6 thumbnailBox"></div>
            <div className="col-6">{props.title3}</div>
          </div>              
          <div className="row" onClick={() => {setThumbnail(props.image4); setText(props.text4); setTitle(props.title4); setVideo(props.video4)}}>
            <div style={{backgroundImage: `url("${props.image4}")`}} id="thumbnail1" className="col-6 thumbnailBox"></div>
            <div className="col-6">{props.title4}</div>
          </div>             
          <div className="row" onClick={() => {setThumbnail(props.image5); setText(props.text5); setTitle(props.title5); setVideo(props.video5)}}>
            <div style={{backgroundImage: `url("${props.image5}")`}} id="thumbnail1" className="col-6 thumbnailBox"></div>
            <div className="col-6">{props.title5}</div>
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
  return (
    <div className="w-100 pt-5 pb-5">
      {listItems}
    </div>
  );
}


export default Gallery;
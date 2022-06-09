import './Slider.scss';
import React, { useState } from 'react';




function GalleryContent(props){
  const [thumbnail, setThumbnail] = useState(props.image1);
  const [text, setText] = useState(props.text1);
  const [title, setTitle] = useState(props.title1);
  return (
    <div>
      <div className="row">
        <div className="col-md-8 bg-light">
          <img src={thumbnail} alt="test"/>
          <caption>{title}</caption>
          <caption>{text}</caption>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div onClick={() => {setThumbnail(props.image1); setText(props.text1); setTitle(props.title1)}} style={{backgroundImage: `url("${props.image1}")`}} id="thumbnail1" className="col-6 border thumbnailBox"></div>
              <div onClick={() => {setThumbnail(props.image2); setText(props.text2); setTitle(props.title2)}} style={{backgroundImage: `url("${props.image2}")`}} id="thumbnail2" className="col-6 border thumbnailBox"></div>
              <div onClick={() => {setThumbnail(props.image3); setText(props.text3); setTitle(props.title3)}} style={{backgroundImage: `url("${props.image3}")`}} id="thumbnail3" className="col-6 border thumbnailBox"></div>
              <div onClick={() => {setThumbnail(props.image4); setText(props.text4); setTitle(props.title4)}} style={{backgroundImage: `url("${props.image4}")`}} id="thumbnail4" className="col-6 border thumbnailBox"></div>
              <div onClick={() => {setThumbnail(props.image5); setText(props.text5); setTitle(props.title5)}} style={{backgroundImage: `url("${props.image5}")`}} id="thumbnail5" className="col-6 border thumbnailBox"></div>
              <div onClick={() => {setThumbnail(props.image6); setText(props.text6); setTitle(props.title6)}} style={{backgroundImage: `url("${props.image6}")`}} id="thumbnail6" className="col-6 border thumbnailBox"></div>
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
      title2 = {item.title2}
      image2 = {item.image2}
      text2 = {item.text2} 
      title3 = {item.title3}
      image3 = {item.image3}
      text3 = {item.text3} 
      title4 = {item.title4}
      image4 = {item.image4}
      text4 = {item.text4} 
      title5 = {item.title5}
      image5 = {item.image5}
      text5 = {item.text5} 
      title6 = {item.title6}
      image6 = {item.image6}
      text6 = {item.text6}  />
  );
  return (
    <div className="container pt-5 pb-5">
      {listItems}
    </div>
  );
}


export default Gallery;
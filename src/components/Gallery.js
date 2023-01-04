import './Gallery.scss';
import React, { useState } from 'react';




function GalleryContent(props){
  const [thumbnail, setThumbnail] = useState(props.image1);
  const [text, setText] = useState(props.text1);
  const [title, setTitle] = useState(props.title1);
  return (
    <div>
      <div className="row">
        <div className="col-md-8 cardBackground">
          <div className="row">
              <div style={{backgroundImage: `url("${thumbnail}")`, backgroundRepeat: 'no-repeat', backgroundSize: "contain",backgroundPosition: 'center', height:600, width:800}}></div>
          </div>
          
          <div className="row">
            <p className="bodyTextLight galleryText">{text}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image1); setText(props.text1); setTitle(props.title1);}}>
              <div style={{backgroundImage: `url("${props.image1}")`}} id="thumbnail1"  className="thumbnailBoxGallery border"></div>
            </div>
            <div  className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image2); setText(props.text2); setTitle(props.title2);}}>
              <div style={{backgroundImage: `url("${props.image2}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
            </div>  
            </div>
            <div className="row">           
              <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image3); setText(props.text3); setTitle(props.title3);}}>
                <div style={{backgroundImage: `url("${props.image3}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
              </div>              
              <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image4); setText(props.text4); setTitle(props.title4);}}>
                <div style={{backgroundImage: `url("${props.image4}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
              </div>  
            </div>        
            <div className="row">
              <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image5); setText(props.text5); setTitle(props.title5);}}>
              <div style={{backgroundImage: `url("${props.image5}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
              </div>
              <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image6); setText(props.text6); setTitle(props.title6);}}>
                <div style={{backgroundImage: `url("${props.image6}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
              </div>  
            </div>
            <div className="row"> 
              <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image7); setText(props.text7); setTitle(props.title7);}}>
                <div style={{backgroundImage: `url("${props.image7}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
              </div>    
              <div className="col-6 galleryThumbnailContainer" onClick={() => {setThumbnail(props.image8); setText(props.text8); setTitle(props.title8);}}>
                <div style={{backgroundImage: `url("${props.image8}")`}} id="thumbnail1" className="thumbnailBoxGallery border"></div>
              </div> 
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
      text6 = {item.text6}
      title7 = {item.title7}
      image7 = {item.image7}
      text7 = {item.text7}
      title8 = {item.title8}
      image8 = {item.image8}
      text8 = {item.text8}  />
  );
  return (
    <div className="backgroundDark">
    <div className="container">
    <h2 className="blueGradientText headerText fiveCardClusterTitle">Fine Art</h2>
      {listItems}
      </div>
    </div>
  );
}


export default Gallery;
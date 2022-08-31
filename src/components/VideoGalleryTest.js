import '../index.scss';
import '../styles/VideoGallery.scss';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';



function GalleryContent(props){
  const {
    text: [text, setText]
    } = {
      text: useState(props.text),
      ...(props.state1 || {})
    };
  const {
    video: [video, setVideo]
    } = {
      video: useState(props.video),
      ...(props.state4 || {})
    };
  const {
    title: [title, setTitle]
    } = {
      title: useState(props.title),
      ...(props.state2 || {})
    };
  return (
          <div className="row videoThumbnail" onClick={() => {setText(props.text); setTitle(props.title); setVideo(props.video);}}>
            <div style={{backgroundImage: `url("${props.image}")`}} id="thumbnail1" className="col-3 videoThumbnailBox">
            <div className="centerPlayIcon"><div className="gradientBackground playBackground"></div><div className="blueBorder"><AiIcons.AiFillPlayCircle className="playButton"/></div>
            </div>
            </div>
            <div className="col-9 smallTitleLight">
            <div className="p-1 videoThumbnailText">
            <div className="row">{props.title}</div>
            <div className="row bodyTextLight pt-2">{props.thumbnailText}</div>
            </div>
            </div>
          </div>
  );
}

function VideoGalleryTest(props){
  
  let [text, setText] = useState(props.text1);
  let [title, setTitle] = useState(props.title1);
  let [video, setVideo] = useState(props.video1);
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <GalleryContent key={item.title}
      title = {item.title}
      image = {item.image}
      text = {item.text}
      video = {item.video}
      thumbnailText = {item.thumbnailText}
      state1={{ text: [text, setText] }}
      state2={{ title: [title, setTitle] }}
      state4={{ video: [video, setVideo] }}
      />);

  if(video == undefined){
    video = (listItems[0].props.video);
    title = (listItems[0].props.title);
    text = (listItems[0].props.text);
  }

  return (
  <div className="backgroundDark pb-5">
    <div className="container-lg">
    
      <div className="row">
        <div className="col-md-7">
          <div className="row videoPlacement">
            <div className="videoEmbed embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          
          <div className="row pt-5 videoTextArea">
            <p className="videoTitle">{title}</p>
            <p className="bodyTextLight pb-3">{text}</p>
          </div>
        </div>
        <div className="col-md-5 videoBackground">
      {listItems}
    </div>
    </div>
    </div>
    </div>
  );
}


export default VideoGalleryTest;
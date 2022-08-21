import '../index.scss';
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
          <div className="row borderMedium backgroundLightest" onClick={() => {setText(props.text); setTitle(props.title); setVideo(props.video);}}>
            <div style={{backgroundImage: `url("${props.image}")`}} id="thumbnail1" className="col-6 thumbnailBox">
            <div className="centerPlayIcon"><div className="gradientBackground playBackground"></div><div className="blueBorder"><AiIcons.AiFillPlayCircle className="playButton"/></div>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title}</div>
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
    <div>
    <h2>hi</h2>
      <div className="row backgroundLightest">
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
        <div className="col-md-4 backgroundMedium">
      {listItems}
    </div>
    </div>
    </div>
  );
}


export default VideoGalleryTest;
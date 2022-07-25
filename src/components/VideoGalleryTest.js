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
            <div className="centerAbsolute"><div className="gradientBackground playBackground"></div><AiIcons.AiFillPlayCircle className="playButton"/>
            </div>
            </div>
            <div className="col-6 smallTitleDark">{props.title}</div>
          </div>
  );
}

function VideoGalleryTest(props){
  
  const [text, setText] = useState(props.text1);
  const [title, setTitle] = useState(props.title1);
  const [video, setVideo] = useState(props.video1);
  const item = props.item;


  console.log(video);
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <GalleryContent key={item.title1}
      title = {item.title1}
      image = {item.image1}
      text = {item.text1}
      video = {item.video1}
      state1={{ text: [text, setText] }}
      state2={{ title: [title, setTitle] }}
      state4={{ video: [video, setVideo] }}
      />);

  //console.log(listItems);
  //console.log(listItems[0].props.video);
  console.log(video);

  return (
    <div>
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
      {listItems}
    </div>
    </div>
    </div>
  );
}


export default VideoGalleryTest;
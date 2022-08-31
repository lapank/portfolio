import '../index.scss';
import '../styles/VideoGallery.scss';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import {developmentVideoTitle} from './VideoGalleryDataTest';


function TitleContent(props){
	return(
		<div>
		<h4 className="videoEyebrow">{props.eyebrow}</h4>
		<h2 className="videoGalleryTitle">{props.title}</h2>
		</div>
	);
}

function VideoTitle(props){
  
  const item = props.item;
  const listItems = item.map((item) =>
    <TitleContent key={item.title}
      eyebrow = {item.eyebrow}
      title = {item.title}
    />);
    return (
    	<div className="pt-5 pb-3 backgroundDark">
    	<div className="container-lg">
    	{listItems}
    	</div>
    	</div>
  );
   }

  export default VideoTitle;
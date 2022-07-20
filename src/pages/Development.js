import React from 'react';
import '../index.scss';
import Slider from '../components/Slider';
import {sliderData} from '../components/SliderData';
import {devData} from '../components/TwoColBoxData';
import TwoColBoxAnimation from '../components/TwoColBoxAnimation';
import {developmentVideoData} from '../components/VideoGalleryData';
import VideoGallery from '../components/VideoGallery.js';

function Development(){
	return(
		<div className='development backgroundMedium'>
			<TwoColBoxAnimation item={devData}/>
			<VideoGallery item={developmentVideoData}/>
			<Slider item={sliderData}/>
			<div className="backgroundLightest container embed-responsive embed-responsive-1by1">
			<iframe title="Alt Text Checker" className="embed-responsive-item" src="https://kaylinlapan.com/alt-text/index.html" />
			</div>
			<div className="container">
			<iframe title="Tower Defense Game" style={{width: 929, height: 729}} src="https://kaylinlapan.com/tower-defense/index.html" />
			</div>
			
		</div>
	);
}

export default Development;
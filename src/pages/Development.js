import React from 'react';
import '../index.scss';
import Slider from '../components/Slider';
import {sliderData} from '../components/SliderData';
import {devData} from '../components/TwoColBoxData';
import TwoColBoxAnimation from '../components/TwoColBoxAnimation';
import {developmentVideoData} from '../components/VideoGalleryDataTest';
import VideoGallery from '../components/VideoGalleryTest.js';

function Development(){
	let hash = window.location.hash;
	function navigate(){
		if(hash){
	 		window.location.replace(hash);
	 	}
	 }
	return(
		<div className='development backgroundMedium pb-5' onLoad={navigate}>
			<TwoColBoxAnimation item={devData}/>
			<div id="video"></div>
			<VideoGallery item={developmentVideoData}/>
			<div id="samples"></div>
			<Slider item={sliderData}/>
			<div className="container pt-5">
			<h2 id="alt" className="headerTextDark">Alt Text Validator</h2>
			<p className="bodyTextDark">Built to help content creators write best practive alt text.</p>
			</div>
			<div className="container embed-responsive embed-responsive-4by3 altText">
			<iframe title="Alt Text Checker" className="embed-responsive-item" src="https://kaylinlapan.com/alt-text/index.html" />
			</div>
			<div id="game" className="container pt-5">
			<h2 className="headerTextDark">Tower Defense Game</h2>
			<p className="bodyTextDark">Built with the HTML5 canvas API and JavaScript.</p>
			</div>
			<div className="container relative embed-responsive embed-responsive-4by3">
			<div className="fullScreenWarning"><p className="smallTitleDark">View on a wider browser window to play.</p></div>
			<iframe title="Tower Defense Game" className="game" src="https://kaylinlapan.com/tower-defense/index.html" />
			</div>
			
		</div>
	);
}

export default Development;
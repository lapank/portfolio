import React from 'react';
import '../index.scss';
import Slider from '../components/Slider';
import {sliderData} from '../components/SliderData';
import {devData} from '../components/TwoColBoxData';
import TwoColBoxAnimation from '../components/TwoColBoxAnimation';
import {developmentVideoData} from '../components/VideoGalleryDataTest';
import VideoGallery from '../components/VideoGalleryTest.js';
import {developmentVideoTitle} from '../components/VideoGalleryDataTest';
import VideoTitle from '../components/VideoTitle.js';
import {developmentSliderTitle} from '../components/SliderData.js';
import NavOverlay from '../components/NavOverlay.js';
import SecondaryPageHeader from '../components/SecondaryPageHeader.js';
import {devPage} from '../components/SecondaryPageHeaderData.js';


function Development(){
	let hash = window.location.hash;
	function navigate(){
		if(hash){
	 		window.location.replace(hash);
	 	}
	 }

	 function sliderSelect(){
	    //console.log('hi');
	    document.getElementById("s1").checked = true;
	    //console.log(document.getElementById("s1").innerHTML);
	  }
	return(
		<div className='development backgroundDark pb-5' onLoad={navigate} onLoad={sliderSelect}>
			<SecondaryPageHeader item={devPage}/>
			<VideoTitle item={developmentVideoTitle}/>
			<VideoGallery item={developmentVideoData}/>
			<div id="samples" ></div>
			<Slider item={sliderData}/>
			<div className="container pt-5">
			<h2 id="alt" className="blueGradientText fourColTitle headerText">Alt Text Validator</h2>
			<p className="bodyTextLight mt-5">I built this application to help web content editors and social media managers at the Air and Space Museum write alt text that follows best practices.  The application can be expanded to include new vocabularies and logic checks, like checking if any color names are used, or if directional language is used.</p>
			<p className="bodyTextLight mt-5">View the GitHub Repository: <a className="link" href="https://github.com/lapank/Alt-Text">https://github.com/lapank/Alt-Text</a></p>
			</div>
			<div className="container embed-responsive embed-responsive-4by3 altText">
			<iframe title="Alt Text Checker" className="embed-responsive-item" src="https://kaylinlapan.com/alt-text/index.html" />
			</div>
			<div id="game" className="container pt-5">
			<h2 className="blueGradientText fourColTitle headerText">Tower Defense Game</h2>
			<p className="bodyTextLight mt-5">Web browser game built with the HTML5 Canvas API.  I worked on this game with a team of 3 developers.  It includes 3 levels with various enemies and maps.  A save functionality and a chet code that unlocks all the levels.  Type “cheat” to access all levels.</p>
			<p className="bodyTextLight mt-5">View the GitHub Repository: <a className="link" href="https://github.com/lapank/CS467-Tower-Defense">https://github.com/lapank/CS467-Tower-Defense</a></p>
			</div>
			<div className="container relative embed-responsive embed-responsive-4by3">
			<div className="fullScreenWarning"><p className="smallTitleDark">View on a wider browser window to play.</p></div>
			<iframe title="Tower Defense Game" className="game" src="https://kaylinlapan.com/tower-defense/index.html" />
			</div>
			
		</div>
	);
}

export default Development;

import React from 'react';
import {manageData} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData';
import {sliderData} from '../components/SliderData';
import Slider from '../components/Slider.js';
import {videoGalleryData} from '../components/VideoGalleryData';
import VideoGallery from '../components/VideoGallery.js';

function Management(){
	return(
		<div className='management'>
			<h1>Management</h1>
			<VideoGallery item={videoGalleryData}/>
			<TwoColBox item={manageData}/>
			<FourCards item={fourCardsManageData} />
		</div>
	);
}

export default Management;
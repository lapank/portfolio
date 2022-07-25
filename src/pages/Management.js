import React from 'react';
import {manageData} from '../components/TwoColBoxData.js';
import TwoColBox from '../components/TwoColBox.js'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData.js';
import {managmentVideoData} from '../components/VideoGalleryData.js';
import VideoGallery from '../components/VideoGallery.js';
import Charts from "../components/charts/Charts.js";
import {managmentVideoDataTest} from '../components/VideoGalleryDataTest.js';
import VideoGalleryTest from '../components/VideoGalleryTest.js';

function Management(){
	return(
		<div className='management'>
				<h1>Management</h1>
				<VideoGallery item={managmentVideoData}/>
				<VideoGalleryTest item={managmentVideoDataTest}/>
				<FourCards item={fourCardsManageData} />
				<TwoColBox item={manageData}/>
				<Charts />
		</div>
	);
}

export default Management;
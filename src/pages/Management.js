import React from 'react';
import {manageData} from '../components/TwoColBoxData.js';
import TwoColBox from '../components/TwoColBox.js'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData.js';
import Charts from "../components/charts/Charts.js";
import {managmentVideoDataTest} from '../components/VideoGalleryDataTest.js';
import VideoGalleryTest from '../components/VideoGalleryTest.js';
import {managmentVideoTitle} from '../components/VideoGalleryDataTest';
import VideoTitle from '../components/VideoTitle.js';

function Management(){
	return(
		<div className='management'>
				<VideoTitle item={managmentVideoTitle}/>
				<VideoGalleryTest item={managmentVideoDataTest}/>
				<FourCards item={fourCardsManageData} />
				<Charts />
		</div>
	);
}

export default Management;
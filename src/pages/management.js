import React from 'react';
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData.js';
import Charts from "../components/charts/Charts.js";
import {managmentVideoDataTest} from '../components/VideoGalleryDataTest.js';
import VideoGalleryTest from '../components/VideoGalleryTest.js';
import {managmentVideoTitle} from '../components/VideoGalleryDataTest';
import VideoTitle from '../components/VideoTitle.js';
import SecondaryPageHeader from '../components/SecondaryPageHeader.js';
import {projPage} from '../components/SecondaryPageHeaderData.js';

function Management(){
	return(
		<div className='management backgroundDark'>
		<SecondaryPageHeader item={projPage}/>
				<VideoTitle item={managmentVideoTitle}/>
				<VideoGalleryTest item={managmentVideoDataTest}/>
				<FourCards item={fourCardsManageData} />
				<Charts />
		</div>
	);
}

export default Management;

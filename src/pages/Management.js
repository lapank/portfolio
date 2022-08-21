import React from 'react';
import {manageData} from '../components/TwoColBoxData.js';
import TwoColBox from '../components/TwoColBox.js'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData.js';
import Charts from "../components/charts/Charts.js";
import {managmentVideoDataTest} from '../components/VideoGalleryDataTest.js';
import VideoGalleryTest from '../components/VideoGalleryTest.js';

function Management(){
	return(
		<div className='management'>
		<div className="backgroundLightest">
			<div className=" container p-5 headerTextDark" id="video">Program Managment</div>
			</div>
				<VideoGalleryTest item={managmentVideoDataTest}/>
				<FourCards item={fourCardsManageData} />
				<Charts />
		</div>
	);
}

export default Management;
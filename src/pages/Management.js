import React from 'react';
import {manageData} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData';
import {managmentVideoData} from '../components/VideoGalleryData';
import VideoGallery from '../components/VideoGallery.js';

function Management(){
	return(
		<div className='management'>
				<h1>Management</h1>
				<VideoGallery item={managmentVideoData}/>
				<FourCards item={fourCardsManageData} />
				<TwoColBox item={manageData}/>
	    
		</div>
	);
}

export default Management;
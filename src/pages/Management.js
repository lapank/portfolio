import React from 'react';
import {manageData} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData';
import {sliderData} from '../components/SliderData';
import Slider from '../components/Slider.js';

function Management(){
	return(
		<div className='management'>
			<h1>Management</h1>
			<Slider item={sliderData}/>
			<TwoColBox item={manageData}/>
			<FourCards item={fourCardsManageData} />
		</div>
	);
}

export default Management;
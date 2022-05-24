import React from 'react';
import Slider from '../components/Slider';
import {sliderData} from '../components/SliderData';
import {devData} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox';

function Development(){
	return(
		<div className='development'>
			<h1>Development</h1>
			<TwoColBox item={devData}/>
		</div>
	);
}

export default Development;
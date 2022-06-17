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
			<Slider item={sliderData}/>
			<div className="container embed-responsive embed-responsive-1by1">
			<iframe className="embed-responsive-item" src="https://kaylinlapan.com/alt-text/index.html" />
			</div>
			<div className="container">
			<iframe style={{width: 929, height: 729}} src="https://kaylinlapan.com/tower-defense/index.html" />
			</div>
			
		</div>
	);
}

export default Development;
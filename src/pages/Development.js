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
			<div className="container embed-responsive embed-responsive-16by9">
			<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cWDJoK8zw58" />
			</div>
			<div className="container mt-5 embed-responsive embed-responsive-16by9">
			<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cWDJoK8zw58" />
			</div>
		</div>
	);
}

export default Development;
import React from 'react';
import TwoColBox from '../components/TwoColBox.js';
import {introData} from '../components/TwoColBoxData';

function Home(){
	return(
		<div className='home'>
			<TwoColBox item={introData}/>
		</div>
	);
}

export default Home;
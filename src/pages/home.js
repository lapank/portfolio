import React from 'react';
import TwoColBox from '../components/TwoColBox.js';
import {introData} from '../components/TwoColBoxData';
import FourCards from '../components/FourCards.js';
import {fourCardsIntroData} from '../components/FourCardsData';

function Home(){
	return(
		<div className='home'>
			<TwoColBox item={introData}/>
			<FourCards item={fourCardsIntroData} />
		</div>
	);
}

export default Home;
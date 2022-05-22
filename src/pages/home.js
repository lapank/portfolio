import React from 'react';
import TwoColBox from '../components/TwoColBox.js';
import {introData} from '../components/TwoColBoxData';
import FourCards from '../components/FourCards.js';
import {fourCardsIntroData} from '../components/FourCardsData';
import ImageGrid from '../components/ImageGrid.js';
import {imageGridIntroData} from '../components/ImageGridData.js';

function Home(){
	return(
		<div className='home'>
			<TwoColBox item={introData}/>
			<FourCards item={fourCardsIntroData} />
			<ImageGrid item={imageGridIntroData}/>
		</div>
	);
}

export default Home;
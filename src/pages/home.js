import React from 'react';
import FourCards from '../components/FourCards.js';
import {fourCardsIntroData} from '../components/FourCardsData';
import ImageGrid from '../components/ImageGrid.js';
import {imageGridIntroData} from '../components/ImageGridData.js';
import FiveCardCluster from '../components/FiveCardCluster.js';
import {threeColData} from '../components/ThreeColData.js';
import ThreeCol from '../components/ThreeCol.js';
import NavOverlay from '../components/NavOverlay.js';

const Home = () => {
	return(
		<div className='home'>
			<NavOverlay/>
			<ThreeCol item={threeColData}/>
			<FourCards item={fourCardsIntroData} />
			<ImageGrid item={imageGridIntroData}/>
			<FiveCardCluster />
		</div>
	);
}

export default Home;
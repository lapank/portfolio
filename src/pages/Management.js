import React from 'react';
import {manageData} from '../components/TwoColBoxData';
import TwoColBox from '../components/TwoColBox'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData';

function Management(){
	return(
		<div className='management'>
			<h1>Management</h1>
			<TwoColBox item={manageData}/>
			<FourCards item={fourCardsManageData} />
		</div>
	);
}

export default Management;
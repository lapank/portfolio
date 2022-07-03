import React from 'react';
import { Container } from "react-bootstrap";
import PizzaChart from "../components/PizzaChart";
import DinosaurChart from "../components/DinosaurChart";
import useGoogleCharts from '../components/useGoogleCharts';
import {manageData} from '../components/TwoColBoxData.js';
import TwoColBox from '../components/TwoColBox.js'; 
import FourCards from '../components/FourCards.js';
import {fourCardsManageData} from '../components/FourCardsData.js';
import {managmentVideoData} from '../components/VideoGalleryData.js';
import VideoGallery from '../components/VideoGallery.js';
import Charts from '../components/Charts.js';
import {chartsData} from '../components/ChartsData.js';

function Management(){
	const google = useGoogleCharts();
	return(
		<div className='management'>
				<h1>Management</h1>
				<VideoGallery item={managmentVideoData}/>
				<FourCards item={fourCardsManageData} />
				<TwoColBox item={manageData}/>
				<PizzaChart google={google} />
				<DinosaurChart google={google} />
		</div>
	);
}

export default Management;
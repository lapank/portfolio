import React from 'react';
import {artData} from '../components/TwoColBoxData.js';
import TwoColBox from '../components/TwoColBox.js';
import {galleryData} from '../components/GalleryData.js';
import Gallery from '../components/Gallery.js';
import CardList from '../components/CardList.js';
import {cardData} from '../components/CardData.js';
import SecondaryPageHeader from '../components/SecondaryPageHeader.js';
import {artPage} from '../components/SecondaryPageHeaderData.js';


function Art(){
	return(
		<div className='art'>
			<SecondaryPageHeader item={artPage}/>
			<Gallery item={galleryData}/>
			<CardList item={cardData}/>
			<div className="backgroundDark">
			<div className="container pt-5 pb-5">
			<h2 className="blueGradientText fourColTitle headerText">Video Editing</h2>
			<p className="bodyTextLight">Case study 3 for U.S. Election Assisstance Commision. Web users are more likely to commit three minutes of their time to a video than 14 minutes. I cut this US Election Assistance Commission video by 79%, so the user gets to enjoy a highlight reel of the interview's best moments. By shortening the video, the chance a viewer will commit time to watch the video is dramatically increased.
<a href="https://www.youtube.com/watch?v=aSJECGbA0D8" className="linkLight"> See the full video on Youtube</a>.</p>
			<div className="embed-responsive embed-responsive-16by9">

			<iframe width="560" height="315" src="https://www.youtube.com/embed/RiEqlchohBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
			</div>
			</div>
		</div>
	);
}

export default Art;
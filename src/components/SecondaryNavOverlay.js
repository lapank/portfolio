import React, { useState } from 'react';
import '../index.scss';
import './SecondaryNavOverlay.scss';

function Nav(){
	const [click, setClick] = useState(0);
	if(click % 2 !== 1){
		return(
			<div className="w-100 navOverlayPosition">
			<nav className="navbar navbar-expand-lg navbar-light">
			  <a className="navbar-brand headerTextNavOverlay" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler collapsed togglerShadowDark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse navOverlayButtons" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			      <li className="nav-item outlineSecondaryNavOverlay">
			        <a className="nav-link textSecondaryNavOverlay" href="/web-development">Web Development</a>
			      </li>
			      <li className="nav-item outlineSecondaryNavOverlay">
			        <a className="nav-link textSecondaryNavOverlay" href="/art-digital-media">Art & Digital Media</a>
			      </li>
			      <li className="nav-item outlineSecondaryNavOverlay">
			      	<a className="nav-link textSecondaryNavOverlay" href="/product-owner-project-management">Product Owner & Project Managment</a>
			      </li>
			    </ul>
			  </div>
			</nav>
			</div>
		)
	}else{
		return(
			<nav className="navbar navbar-expand-lg navbar-light" style={{height: 220 + 'px'}}>
			  <a className="navbar-brand headerTextNavOverlay" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler togglerShadowDark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse show bodyText" id="navbarNavAltMarkup" >
			    <div className="navbar-nav">
			      <a className="nav-item nav-link" href="/web-development">Web Development</a>
			      <a className="nav-item nav-link" href="/art-digital-media">Art & Digital Media</a>
			      <a className="nav-item nav-link" href="/product-owner-project-management">Product Owner & Project Managment</a>
			    </div>
			  </div>
			</nav>

		)
	}
}

export default Nav;
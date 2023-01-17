import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../index.scss';
import './SecondaryNavOverlay.scss';

function Nav(){
	const [click, setClick] = useState(0);
	if(click % 2 !== 1){
		return(
			<div className="w-100 navOverlayPosition">
			<nav className="navbar navbar-expand-lg navbar-dark">
			<Link className="navbar-brand headerTextNavOverlay" to={`/`}>Kaylin Lapan | Portfolio</Link>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler collapsed togglerShadowDark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse navOverlayButtons" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			      <li className="nav-item outlineSecondaryNavOverlay">
				  <Link className="nav-link textSecondaryNavOverlay" to={`/web-development`}>Web Development</Link>
			      </li>
			      <li className="nav-item outlineSecondaryNavOverlay">
				  <Link className="nav-link textSecondaryNavOverlay" to={`/art-digital-media`}>Art & Digital Media</Link>
			      </li>
			      <li className="nav-item outlineSecondaryNavOverlay">
				  <Link className="nav-link textSecondaryNavOverlay" to={`/product-owner-project-management`}>Product Owner & Project Managment</Link>
			      </li>
			    </ul>
			  </div>
			</nav>
			</div>
		)
	}else{
		return(
			<nav className="navbar navbar-expand-lg navbar-dark" style={{height: 220 + 'px'}}>
			  <a className="navbar-brand headerTextNavOverlay" href="/">Kaylin Lapan | Portfolio</a>
			  <button onClick={() => {setClick(click+1)}} className="navbar-toggler togglerShadowDark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse show bodyText" id="navbarNavAltMarkup" >
				<div className="navbar-nav">
				<Link className="nav-item nav-link" to={`/web-development`}>Web Development</Link>
				  <Link className="nav-item nav-link" to={`/art-digital-media`}>Art & Digital Media</Link>
				  <Link className="nav-item nav-link" to={`/product-owner-project-management`}>Product Owner & Project Managment</Link>
			    </div>
			  </div>
			</nav>

		)
	}
}

export default Nav;
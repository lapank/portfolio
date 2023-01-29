import React from 'react';
//import './App.scss';
import Nav from './components/Nav.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import Development from './pages/development.js';
import Art from './pages/art.js';
import Management from './pages/management.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){
	
	return(
			<div className='App'  className="" style={{overflow: 'hidden'}}>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />}/>
					<Route path='/web-development' element={<Development />}/>
					<Route path='/art-digital-media' element={<Art />}/>
					<Route path='/product-owner-project-management' element={<Management />}/>
				</Routes>
			</Router>
			</div>
		);
}

export default App;
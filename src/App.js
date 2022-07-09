import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Nav from './components/Nav.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Development from './pages/Development';
import Art from './pages/Art';
import Management from './pages/Management';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){
	
	return(
			<div className='App'>
			<Router>
				
				<Nav />
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
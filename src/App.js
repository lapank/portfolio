import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Development from './pages/development';
import Art from './pages/art';
import Management from './pages/management';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(){
	
	return(
			<div className='App' style={{overflow: 'hidden'}}>
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
import React from 'react';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
	return (
		<div className="landing">
			<div className="container">
				<NavBar />
				<Home />
				<About />
				<Projects />
			</div>
		</div>
	);
}

export default App;

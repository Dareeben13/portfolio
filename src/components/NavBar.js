import React from 'react';
import './Navbar.css';
import Slide from 'react-reveal';

function NavBar() {
	return (
		<div className="nav-container">
			<Slide top>
				<h3>Welcome</h3>
			</Slide>
			<Slide right>
				<ul className="nav-wrapper">
					<li className="nav-link">Home</li>
					<li className="nav-link">About</li>
					<li className="nav-link">Services</li>
					<li className="nav-link">My Blog</li>
					<li className="nav-link">Contact</li>
				</ul>
			</Slide>
		</div>
	);
}

export default NavBar;

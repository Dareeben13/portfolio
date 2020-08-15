import React from 'react';
import './About.css';
import Button from './button';
import svg from '../Images/animation.svg';
import Fade from 'react-reveal';

function About() {
	return (
		<section id="about" className="abt">
			<Fade left>
				<div className="svg-container">
					<img src={svg} alt="illustration" />
				</div>
			</Fade>

			<div className="heading-section">
				<div>
					<h2>About Me</h2>
					<h1>About</h1>
				</div>
				<Fade right>
					<div>
						<p>
							“Always code as if the guy who ends up maintaining your code will be a violent psychopath
							who knows where you live”
						</p>
					</div>
				</Fade>

				<Fade bottom>
					<div className="grid-container">
						<ul className="grid-ul">
							<li>Name:</li>
							<li>Address:</li>
							<li>Email:</li>
							<li>Phone:</li>
							<li>GitHub:</li>
						</ul>
						<ul className="grid-ul2">
							<li>Eben Kolawole</li>
							<li>Lagos Nigeria</li>
							<li>e2kelly2000@gmail.com</li>
							<li>+234-906-342-7447</li>
							<li>Dareeben13</li>
						</ul>
					</div>
				</Fade>

				<Fade right>
					<div className="about-btn">
						<h4>
							<span>100</span> Projects Complete
						</h4>
						<Button text="DOWNLOAD CV" link="#home" />
					</div>
				</Fade>
			</div>
		</section>
	);
}

export default About;

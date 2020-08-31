import React from 'react';
import Fade from 'react-reveal';
import Button from './button';
import './Homepage.css';
import ImageDrawer from './ImageDrawer';

function Home() {
	return (
		<div className="homepage-wrapper" id="home">
			<div className="flex-container">
				<Fade left>
					<div className="homepage-text">
						<div className="hello">Hello !</div>
						<div className="name">
							I'm <span className="surname">Eben Kolawole</span>
						</div>
						<div className="description">
							{' '}
							A Software <span className="engineer">Engineer</span>
						</div>

						<div className="home-btn">
							<div className="btn1">
								<Button text="Hire me" link="about" />
							</div>
							<div className="btn2">
								<Button text="Contact Me" link="about" />
							</div>
						</div>
					</div>
				</Fade>
				<Fade right>
					<div className="my-svg">
						<ImageDrawer />
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default Home;

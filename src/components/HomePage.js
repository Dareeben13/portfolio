import React from 'react';
import Fade from 'react-reveal';
import ContentCard from './ContentCard';
import Button from './button';
import './Homepage.css';
import mySvg from '../Images/undraw_working_from_anywhere_ub67.svg';
import codeImage from '../Images/codeImg.gif';
import ImageDrawer from './ImageDrawer';
const Homepage = () => {
	return (
		<section id="home">
			<div className="homepage-wrapper">
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
									<Button text="Hire me" />
								</div>
								<div className="btn2">
									<Button text="Contact Me" />
								</div>
							</div>
						</div>
					</Fade>
					<Fade bottom>
						<div className="my-svg">
							<ImageDrawer />
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
};
export default Homepage;

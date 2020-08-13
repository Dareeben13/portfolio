import React, { Component } from 'react';
import mySvg1 from '../Images/undraw_working_from_anywhere_ub67.svg';
import mySvg2 from '../Images/svg3.svg';
import svg4 from '../Images/svg4.svg';

const image = [ mySvg1, mySvg2, svg4 ];

class ImageDrawer extends Component {
	state = { images: image, selectedImage: image[0] };

	componentDidMount() {
		let intervalId = setInterval(() => {
			this.setState((prevState) => {
				if (prevState.selectedImage === this.state.images[0]) {
					return {
						selectedImage: this.state.images[1]
					};
				} else {
					return {
						selectedImage: this.state.images[0]
					};
				}
			});
		}, 4000);

		this.setState({
			intervalId
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	render() {
		return <img src={this.state.selectedImage} alt={'images'} />;
	}
}

export default ImageDrawer;

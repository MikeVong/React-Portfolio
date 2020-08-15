import React from "react";
import fast from "../img/fast.jpg";
import responsive from "../img/responsive.png";
import dynamic from "../img/dynamic.png";
import intuitive from "../img/intuitive.png";
import myImage from "../img/me.jpg";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={responsive}
						 alt=""
						 style={{
							borderRadius: 50 + "%",
							height: 100 + "px",
							width: 100 + "px"
						}}/>
						<h4>Responsive</h4>
						<p id="infoText">My layouts will work on any device, big or small.</p>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={fast} 
						alt=""
						style={{
							borderRadius: 50 + "%",
							height: 100 + "px",
							width: 100 + "px"
						}}/>
						<h4>Fast</h4>
						<p id="infoText">Fast load times and lag free interaction, my highest priority.</p>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={intuitive} 
						alt=""
						style={{
							borderRadius: 50 + "%",
							height: 100 + "px",
							width: 100 + "px"
						}}/>
						<h4>Intuitive</h4>
						<p id="infoText">Strong preference for easy to use, intuitive UX/UI. </p>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={dynamic}
						 alt=""
						 style={{
							borderRadius: 50 + "%",
							height: 100 + "px",
							width: 100 + "px"
						}}/>
						<h4>Dynamic</h4>
						<p id="infoText">Websites don't have to be static. I love making pages comes to life.</p>
					</div>
				</div>

				<div className="row" style={{ marginTop: 5 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 200 + "px",
								width: 200 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
						Recently earned a certificate in full stack development from the University of Central Florida, with newly developed skills in JavaScript, CSS, React.js, and responsive web design.  Excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 86 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								MySQL
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								MongoDB
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 85 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Express
							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};

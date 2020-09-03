import React from "react";
import homecook from "../img/homecook.jpg";
import mongo from "../img/mongodb.jpg";
import gamer from "../img/project1.jpg";
import train from "../img/train.jpg";
import google from "../img/google.jpg";
import job from "../img/job.jpg";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-white mt-5">
					<div className=" project-container container bg-white pb-5">
						<h1
							id="projects"
							className={"text-center my-5 " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">

							<div
								className={
									"p-1 border border-info homecookbg col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Home Cooks</h2>
									</div>
									<div>
										<button
											id="homecook-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var HomeCookModal = document.getElementById(
													"homecook"
												);
												modalBG.style.display = "block";
												HomeCookModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"p-1 border border-info newscraperbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>News Scraper</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var NewScraperModal = document.getElementById(
													"News-Scraper"
												);
												modalBG.style.display = "block";
												NewScraperModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"p-1 border border-info gamerbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Gamer Bros</h2>
									</div>
									<div>
										<button
											id="gamer-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var gamerModal = document.getElementById(
													"gamer"
												);
												modalBG.style.display = "block";
												gamerModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>

							<div
								className={
									"p-1 border border-info trainbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Train Scheduler</h2>
									</div>
									<div>
										<button
											id="train-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var trainModal = document.getElementById(
													"train"
												);
												modalBG.style.display = "block";
												trainModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"p-1 border border-info googlebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Google Books</h2>
									</div>
									<div>
										<button
											id="google-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var googleModal = document.getElementById(
													"google"
												);
												modalBG.style.display = "block";
												googleModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"p-1 border border-info jobbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>UnHacked Unemployment</h2>
									</div>
									<div>
										<button
											id="job-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var jobModal = document.getElementById(
													"job"
												);
												modalBG.style.display = "block";
												jobModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>

						</div>
					</div>
					
				</div>
				

				{/*hidden modals*/}
				<div id="gallery-card">

					<div id="homecook" className="modal-card">
						<div className="visual">
							<img src={homecook} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Home Cooks</h2>
							<div className="modal-description">
								<ul>
									<li>
									A MERN application that allow user to post and sell their dishes to the community.
									</li>
									<li>
										Designed with Mongodb, Express, ReactJs, NodeJs, React Scroll, React Audio, React Modal, Geo Location, Google Maps API, Axios, React Lottie, Heroku, mLabs and Bootstrap.
									</li>
									<li>
										Developer: Mike Vong and Christine Dang
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									className="btn btn-success"
									href="http://homecooks101.herokuapp.com"
									target="_blank"
									rel="noopener noreferrer">
									<h4>View live demo</h4>
								</a>
								<a
								className="btn btn-warning"
								href="https://github.com/MikeVong/group-project-3" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>Github</h4>
								</a>
								<button
									className="btn btn-danger"
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"homecook"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									<h4>Close</h4>
								</button>
							</div>
						</div>
					</div>

					<div id="News-Scraper" className="modal-card">
						<div className="visual">
							<img src={mongo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>News Scraper</h2>
							<div className="modal-description">
								<ul>
									<li>
									Created a web app that lets users view and leave comments on the latest news. Using Mongoose and Cheerio to scrape news from another site.
									</li>
									<li>
										Developed with Handlebars, Express, CSS3, Bootstrap,
										Moongoose, Cheerio, and NodeJs.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									className="btn btn-success"
									href="https://powerful-mesa-60842.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer">
									<h4>View live demo</h4>
								</a>
								<a
								className="btn btn-warning"
								href="https://github.com/MikeVong/mongoHW" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>Github</h4>
								</a>
								<button
									className="btn btn-danger"
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var NewScraperModal = document.getElementById(
											"News-Scraper"
										);
										modalBG.style.display = "none";
										NewScraperModal.style.display = "none";
									}}>
									<h4>Close</h4>
								</button>
							</div>
						</div>
					</div>

					<div id="gamer" className="modal-card">
						<div className="visual">
							<img src={gamer} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Game Bros</h2>
							<div className="modal-description">
								<ul>
									<li>
									A website for gamer to search for games detail and related videos. 
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Animate.CSS, Firebase, API, and Axios.
									</li>
									<li>
									Developer: Mike Vong, Hunter Lintz, and Carlos Gasperi
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
								className="btn btn-success"
								href="https://mikevong.github.io/Project-1/" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>View live demo</h4>
								</a>
								<a
								className="btn btn-warning"
								href="https://github.com/MikeVong/Project-1" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>Github</h4>
								</a>
								<button
									className="btn btn-danger"
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var gamerModal = document.getElementById(
											"gamer"
										);
										modalBG.style.display = "none";
										gamerModal.style.display = "none";
									}}>
									<h4>Close</h4>
								</button>
							</div>
						</div>
					</div>

					<div id="train" className="modal-card">
						<div className="visual">
							<img src={train} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Train Scheduler</h2>
							<div className="modal-description">
								<ul>
									<li>
									Create a train schedule application that incorporates Firebase to host arrival and departure data. App will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										JavaScript, MomentJs, and Firebase.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a 
								className="btn btn-success"
								href="https://mikevong.github.io/Firebase/" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>View live demo</h4>
								</a>
								<a
								className="btn btn-warning"
								href="https://github.com/MikeVong/Firebase" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>Github</h4>
								</a>
								<button
									className="btn btn-danger"
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var trainModal = document.getElementById(
											"train"
										);
										modalBG.style.display = "none";
										trainModal.style.display = "none";
									}}>
									<h4>Close</h4>
								</button>
							</div>
						</div>
					</div>

					<div id="google" className="modal-card">
						<div className="visual">
							<img src={google} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Google Books Search</h2>
							<div className="modal-description">
								<ul>
									<li>
									A MERN app that allow user to search for a book. Then the book can be view and save it to the database.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap, NodeJs, Express, MongoDB, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a 
								className="btn btn-success"
								href="https://mern-google-book.herokuapp.com/" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>View live demo</h4>
								</a>
								<a
								className="btn btn-warning"
								href="https://github.com/MikeVong/googleBooks" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>Github</h4>
								</a>
								<button
									className="btn btn-danger"
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var googleModal = document.getElementById(
											"google"
										);
										modalBG.style.display = "none";
										googleModal.style.display = "none";
									}}>
									<h4>Close</h4>
								</button>
							</div>
						</div>
					</div>

					<div id="job" className="modal-card">
						<div className="visual">
							<img src={job} alt=""/>
						</div>
						<div className="modal-info">
							<h2>UnHacked Unemployment</h2>
							<div className="modal-description">
								<ul>
									<li>
									Government unemployment instant verification checker, to help during the COVID-19 pandemic
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Handlebars, Express, MySQL, and Mongoose.
									</li>
									<li>
										Developer: Mike Vong, Christine Dang, and Chris Graves
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a 
								className="btn btn-success"
								href="https://vast-beyond-12736.herokuapp.com/" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>View live demo</h4>
								</a>
								<a
								className="btn btn-warning"
								href="https://github.com/ChristineDang/group-project-2" 
								target="_blank"
								rel="noopener noreferrer">
									<h4>Github</h4>
								</a>
								<button
									className="btn btn-danger"
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var jobModal = document.getElementById(
											"job"
										);
										modalBG.style.display = "none";
										jobModal.style.display = "none";
									}}>
									<h4>Close</h4>
								</button>
							</div>
						</div>
					</div>


				</div>
				
			
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};

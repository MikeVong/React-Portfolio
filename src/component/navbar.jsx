import React from "react";
import Background from "./background.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import WOW from "wowjs";
import ReactGa from "react-ga";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
		const wow = new WOW.WOW({live: false});
		wow.init();
		// new WOW.WOW({live: false}).init();
		ReactGa.initialize("UA-177294813-1")
		//to report page view
		ReactGa.pageview("/")
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
				<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<button
							className="home-style navbar-brand btn"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							Back to Stars
						</button>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								<li className="nav-item">
								<button
									className="nav-link btn"
									onClick={() => {
										this.scrolling(this.about);
									}}
									>
									About
								</button>
								</li>
								<li className="nav-item">
								<button
									className="nav-link btn"
									onClick={() => {
										this.scrolling(this.projects);
									}}
									>
									Projects
								</button>
								</li>
								<li className="nav-item">
								<button
									className="nav-link btn"
									onClick={() => {
										this.scrolling(this.contact);
									}}
									>
									Contact
								</button>

								</li>
								
							</ul>
						</div>
					</div>
				</nav>

				<About
					ref={this.about}
					id="about-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>
				<Projects
					ref={this.projects}
					id="my-projects"
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
				/>
				<Contact
					ref={this.contact}
					id="my-contact"
					fadeInLeft={"wow fadeInLeft"}
					shake={"wow pulse"}
				/>
			</div>
		);
	}
}

export default Navbar;

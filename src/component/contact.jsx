import React from "react";
import PropTypes from "prop-types";
import github from "../img/githubSquare.png";
import linkedin from "../img/linkedinSquare.png";
import email from "../img/emailSquare.png";

export default class Contact extends React.Component {
	render() {
		return (
			<div className="jumbotron" id="my-contact">
			<div  className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<h4>Name: Mike Vong</h4>
                <h4>Phone: (626)383-9040</h4>
                <h4>E-mail: mv910@hotmail.com</h4>
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://www.linkedin.com/in/vongmichael"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} 
								alt=""
								style={{
									
									height: 100 + "px",
									width: 100 + "px"
								}}/>
							</a>
							<a
								className="px-3"
								href="https://github.com/MikeVong?tab=repositories"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} 
								alt=""
								style={{
									
									height: 100 + "px",
									width: 100 + "px"
								}}
								/>
							</a>
							<a
								href="mailto:mv910@hotmail.com"
								target="_blank"
								rel="noopener noreferrer">
								<img src={email} 
								alt=""
								style={{
									
									height: 100 + "px",
									width: 100 + "px"
								}}/>
							</a>
						</div>
					</div>

				</div>
			</div>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};

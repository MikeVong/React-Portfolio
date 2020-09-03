import React from "react";
import PropTypes from "prop-types";
import github from "../img/githubSquare.png";
import linkedin from "../img/linkedinSquare.png";
import email from "../img/emailSquare.png";
import pdf from "../img/MikeVongResume.pdf";
import resume from "../img/resume.gif";

export default class Contact extends React.Component {
	render() {
		return (
			<div className="jumbotron bg-white" id="my-contact">
			<div  className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<div className="row">
					<div className="col-md-6 text-center pb-3">
						<h4>Name: Mike Vong</h4>
                		<h4>Phone: (626)383-9040</h4>
                		<h4>E-mail: mv910@hotmail.com</h4>
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
								href="https://github.com/MikeVong"
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
					<div className="col-md-6 ">	
						<a className="btn btn-outline-success"
								href={pdf} 
								target="_blank"
								rel="noopener noreferrer">
									View Resume
						</a>
						<img
						className={"pt-2 pb-2 img-fluid " + this.props.fadeIn}
						src={resume}
						alt=""
						style={{
							
							height: 250 + "px",
							width: 600 + "px"
						}}
						/>

								
							
					</div>
					</div>
				
				</div>
				
				<div className="container">
					<div className="row">
						
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

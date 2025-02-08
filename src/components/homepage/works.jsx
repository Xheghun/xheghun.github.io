import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<a
				rel="noopener noreferrer"
				style={{ textDecoration: "none" }}
				target="_blank"
				href="https://docs.google.com/document/d/15kcAkl8IVtpXAJMt3Z_bLVMfe-9YA8VFbcGzTGUT6JE/edit?usp=sharing"
			>
				<Card
					icon={faBriefcase}
					title="Work"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="https://pbs.twimg.com/profile_images/1526236579433422848/FdLGiItD_400x400.jpg"
									alt="kindred"
									className="work-image"
								/>
								<div className="work-title">Kindred</div>
								<div className="work-subtitle">
									Senior Android Engineer
								</div>
								<div className="work-duration">
									Jun 2023 - Present
								</div>
							</div>

							<div className="work">
								<img
									src="https://pbs.twimg.com/profile_images/1509793389897732120/UZ4eUJev_400x400.jpg"
									alt="mycover.ai"
									className="work-image"
								/>
								<div className="work-title">MyCover.ai</div>
								<div className="work-subtitle">
									Senior Mobile Engineer
								</div>
								<div className="work-duration">
									Sept 2022 - May 2023
								</div>
							</div>

							<div className="work">
								<img
									src="https://pbs.twimg.com/profile_images/1488772879848439809/exCJL6oN_400x400.jpg"
									alt="contextual"
									className="work-image"
								/>
								<div className="work-title">Contextual</div>
								<div className="work-subtitle">
									Software Engineer - Mobile
								</div>
								<div className="work-duration">
									Jun 2021 - April 2023
								</div>
							</div>
						</div>
					}
				/>
			</a>
		</div>
	);
};

export default Works;

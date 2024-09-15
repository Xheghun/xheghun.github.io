import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<a style={{textDecoration: 'none'}} target="_blank" href="https://drive.google.com/file/d/1J0onxs-Jx7oPVnXWFeSKIaGUhxDNhdME/view?usp=sharing">
				<Card
					icon={faBriefcase}
					title="Work"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="https://pbs.twimg.com/profile_images/1526236579433422848/FdLGiItD_400x400.jpg"
									alt="facebook"
									className="work-image"
								/>
								<div className="work-title">Kindred</div>
								<div className="work-subtitle">
									Senior Android Engineer
								</div>
								<div className="work-duration">
									Jun 2023 - Jul 2024
								</div>
							</div>

							<div className="work">
								<img
									src="https://pbs.twimg.com/profile_images/1509793389897732120/UZ4eUJev_400x400.jpg"
									alt="twitter"
									className="work-image"
								/>
								<div className="work-title">MyCover.ai</div>
								<div className="work-subtitle">
									Mobile Engineering Lead
								</div>
								<div className="work-duration">
									Sept 2022 - May 2023
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
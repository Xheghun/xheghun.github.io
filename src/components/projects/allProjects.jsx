import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({showAll}) => {

	const projects = showAll ? INFO.projects : INFO.projects.slice(0,3);

	console.log("Projects "+ projects)

	return (
		<div>
			<div className="all-projects-container">
				{projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
						/>
					</div>
				))}
			</div>

			{showAll && (
				<div>
					<div className="small-title homepage-title">
						Personal Projects
					</div>

					<div className="all-projects-container">
						{INFO.personalProjects.map((project, index) => (
							<div className="all-projects-project" key={index}>
								<Project
									logo={project.logo}
									title={project.title}
									description={project.description}
									linkText={project.linkText}
									link={project.link}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default AllProjects;

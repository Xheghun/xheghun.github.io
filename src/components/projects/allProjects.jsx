import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({showAll}) => {
	return (
		<div>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
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

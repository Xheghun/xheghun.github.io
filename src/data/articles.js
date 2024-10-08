import React from "react";

function article_2() {
	return {
		link: "https://dev.to/xheghun/a-guide-to-dependency-injection-2cf5",
		date: "18 August 2024",
		title: "Understanding Dependency Injection",
		description:
			"Imagine you're working on an app that requires various components to interact seamlessly. You’ve written a class to handle user authentication, but it directly...",
		keywords: [
			"Dependency Injection",
			"David Rufai",
			"Android",
			"kotlin",
			"clean code",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		link: "https://dev.to/xheghun/dependency-injection-in-jetpack-compose-with-koin-a-koincidence-134a",
		date: "10 September 2024",
		title: "Dependency Injection in Jetpack Compose with Koin: A \"Koincidence\"? ",
		description:
			"Have you ever felt like your code is drowning in dependencies, tangled like some Italian spaghetti? Fear not! Dependency Injection (DI) is here to save the day.",
		style: ``,
		keywords: [
		"Dependency Injection",
			"David Rufai",
			"Android",
			"kotlin",
			"clean code",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;

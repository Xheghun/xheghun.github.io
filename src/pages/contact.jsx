"use client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Toaster, toast } from "sonner";
import emailJs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const sendEmail = (params) => {
		const toastId = toast.loading("sending message.....");
		const name = params.from_name.split(" ")[0];

		emailJs
			.send(
				process.env.REACT_APP_PUBLIC_SERVICE_ID,
				process.env.REACT_APP_PUBLIC_TEMPLATE_ID,
				params,
				{
					publicKey: process.env.REACT_APP_PUBLIC_PUBLIC_KEY,
					limitRate: {
						throttle: 5000, //(5000 / 5) * 30 * 60, //limit to one email every 30 minutes
					},
				}
			)
			.then(
				() => {
					toast.success(
						`Thanks! Got your message ${name}, I'll be in touch`,
						{
							id: toastId,
						}
					);
				},
				(error) => {
					toast.error(
						`Ops! your message didn't go through ${name}. it's not you, it's me`,
						{ id: toastId }
					);
				}
			);
	};

	const onSubmit = (data) => {
		const templateParams = {
			to_name: "David",
			from_name: data.name,
			reply_to: data.email,
			from_phone: data.mobile_number,
			message: data.message,
		};

		sendEmail(templateParams);
	};
	console.log(errors);

	return (
		<>
			<Toaster richColors={true} />
			<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				<input
					className="form-item"
					type="text"
					placeholder="Name"
					{...register("name", {
						required: "Name field is required",
						minLength: {
							value: 3,
							message: "Enter a minimum of 3 characters",
						},
					})}
				/>
				{errors.name && (
					<span className="validator-item">
						{errors.name.message}
					</span>
				)}

				<input
					className="form-item"
					type="email"
					placeholder="Email"
					{...register("email", {
						required: "Email field is required",
						minLength: {
							value: 3,
							message: "Enter a valid email of 3 characters",
						},
					})}
				/>
				{errors.email && (
					<span className="validator-item">
						{errors.email.message}
					</span>
				)}

				<input
					className="form-item"
					type="tel"
					placeholder="Mobile number"
					{...register("mobile_number", {})}
				/>
				<input
					placeholder="Message"
					className="form-item"
					{...register("message", {
						required: "Please add your message to this field",
						maxLength: {
							value: 300,
							message:
								"Message should be within 10 - 300 characters",
						},
						minLength: {
							value: 9,
							message:
								"Message should be within 10 - 300 characters",
						},
					})}
				/>
				{errors.message && (
					<span className="validator-item">
						{errors.message.message}
					</span>
				)}

				<div
					style={{
						width: "100%",
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<input value="Submit" className="button" type="submit" />
				</div>
			</form>
		</>
	);
};

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Reach out to me
						</div>

						<div className="subtitle contact-subtitle">
							I'm happy to hear from you! Whether you have a
							question, comment, or just want to chat, I'm here
							for it. Feel free to shoot me an email.
							 - I'll try to respond within a day, though it might
							take a bit longer sometimes. You can also use the
							contact form below, or if social media is
							your thing, can contact me using the social icons
							. I'm always posting and interacting there. Thanks
							again for your interest, and I look forward to
							connecting!
						</div>
					</div>

						<ContactForm />

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

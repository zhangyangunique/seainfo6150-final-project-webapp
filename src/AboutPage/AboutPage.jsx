import React from "react";
import styles from "./AboutPage.module.css";
import aboutData from "../data/aboutdata.json"

const AboutPage = () => {
	return (
		<div className={styles.aboutContainer}>
			<img
				className={styles.aboutImage}
				src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
				alt="about us"
			/>
			<h1 className={styles.aboutTitle}>About me</h1>
			<div className={styles.information}>
				<p>Name: {aboutData.name}</p>
				<address>
					Email:
				<a href={`mailto:${aboutData.email}`}>&nbsp;{aboutData.email}</a>
					<br />
				</address>
				<p>College: {aboutData.college}</p>
				<p>Location: {aboutData.location}</p>
			</div>
		</div>
	);
};

export default AboutPage; 
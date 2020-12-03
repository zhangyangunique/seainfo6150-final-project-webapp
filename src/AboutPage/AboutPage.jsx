import React from "react";
import styles from "./AboutPage.module.css";

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
				<p>Name: Yang Zhang</p>
				<address>
					Email:
				<a href="mailto:zhang.yang2@northeastern.edu">&nbsp;zhang.yang2@northeastern.edu</a>
					<br />
				</address>
				<p>College: Northeastern University</p>
				<p>Location: San Jose</p>
			</div>
		</div>
	);
};

export default AboutPage; 
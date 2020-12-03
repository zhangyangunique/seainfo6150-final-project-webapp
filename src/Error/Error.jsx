import React from 'react'
import styles from "./Error.module.css";

const Error = () => {
	return (
		<div className={styles.errorContainer}>
			<h1>PAGE NOT FOUND</h1>
			<h1>404</h1>
			<p>Out of nothing, something.</p>
			<a href="/">Home</a>
		</div>
	)
}

export default Error

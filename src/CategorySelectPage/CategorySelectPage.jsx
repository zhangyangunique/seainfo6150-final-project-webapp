import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategorySelectPage.module.css";

const CategorySelectPage = () => {
	return (
		<div className={styles.container}>
			<h2>Please select the topic you are interested in</h2>
			<div className={styles.categoryCard}>
				<Link to="/category/sport">
					<p>Sport</p>
				</Link>
				<Link to="/category/food">
					<p>Food</p>
				</Link>
				<Link to="/category/history">
					<p>History</p>
				</Link>
				<Link to="/category/tourism">
					<p>Tourism</p>
				</Link>
			</div>
		</div>
	);
};

export default CategorySelectPage;

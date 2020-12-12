import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import ArticleList from "../Article/ArticleList/ArticleList.jsx";
import { isEmpty } from "lodash";

const Home = () => {
	const [fetchedData, setFetchedData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			// performs a GET request
			const response = await fetch("https://run.mocky.io/v3/4e5f4094-406d-47ae-a02d-32cba2ae7265");
			const responseJson = await response.json();
			setFetchedData(Object.values(responseJson));
		};

		if (isEmpty(fetchedData)) {
			fetchData();
		}
	}, [fetchedData]);

	return isEmpty(fetchedData) ? null : (
		<div className={styles.container}>
			<div className={styles.introduction}>
				<div className={styles.introductionText}>
					<h2>Welcome</h2>
					<p>Find good articles you love</p>
					<p>Read and comment on just about any topic. Hope you enjoy this!</p>
				</div>
			</div>
			<div className={styles.mainbody}>
				<h1>Articles</h1>
				<ArticleList articles={fetchedData} />
			</div>
		</div>
	)
}

export default Home


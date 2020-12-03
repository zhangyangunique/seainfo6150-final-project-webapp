import React from "react";
import styles from "./CategoryPage.module.css";
import ArticleList from "../Article/ArticleList/ArticleList.jsx";
import articlesData from "../data/articles.json"
import { isEmpty } from "lodash";

const CategoryPage = (props) => {
	const fetchedData = articlesData[props.categoryId] === undefined ? null : Object.values(articlesData[props.categoryId]);

	return isEmpty(fetchedData) ? null : (
		<div className={styles.container}>
			<div className={styles.mainbody}>
				<h2>{props.categoryId} Articles</h2>
				<ArticleList articles={fetchedData} />
			</div>
		</div>
	)
}

export default CategoryPage;

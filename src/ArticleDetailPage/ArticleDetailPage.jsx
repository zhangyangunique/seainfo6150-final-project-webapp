import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArticleDetailPage.module.css";
import Comment from "./Comment/Comment.jsx";
import { isEmpty } from "lodash";

const ArticleDetailPage = (props) => {
	const [fetchedArticle, setFetchedArticle] = useState();

	useEffect(() => {
		const fetchData = async () => {
			// performs a GET request
			const response = await fetch("https://run.mocky.io/v3/211521a4-33bb-4927-a761-5414cd2f43cd");
			const responseJson = await response.json();
			const articles = Object.values(responseJson);

			for (let i = 0; i < articles.length; i++) {
				if (articles[i].slug === props.slug) {
					setFetchedArticle(articles[i]);
				}
			}
		};

		if (isEmpty(fetchedArticle)) {
			fetchData();
		}

	}, [fetchedArticle]);

	return isEmpty(fetchedArticle) ? null : (
		<div className={styles.container}>
			<div className={styles.articleContainer}>
				<article className={styles.article}>
					<div className={styles.imageArea}>
						<img className={styles.image} src={fetchedArticle.image._url} alt={fetchedArticle.title} />
					</div>
					<div className={styles.wrapper}>
						<h2 className={styles.title}>{fetchedArticle.title}</h2>
						<div className={styles.text}>
							{fetchedArticle.text}
						</div>
					</div>
				</article>
			</div>
			<Comment />
		</div>
	);
};

ArticleDetailPage.propTypes = {
	slug: PropTypes.string.isRequired
}

export default ArticleDetailPage;
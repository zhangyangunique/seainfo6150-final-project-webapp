import React, { useEffect, useState } from "react";
import styles from "./ArticleDetailPage.module.css";
import Comment from "./Comment/Comment.jsx";
import { isEmpty } from "lodash";

const ArticleDetailPage = (props) => {
	const [fetchedArticle, setFetchedArticle] = useState();

	useEffect(() => {
		const fetchData = async () => {
			// performs a GET request
			const response = await fetch("http://demo1390455.mockable.io/articles");
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

export default ArticleDetailPage;

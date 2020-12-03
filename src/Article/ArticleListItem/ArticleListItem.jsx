import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";
import { Link } from 'react-router-dom';

const ArticleListItem = (props) => {
	return (
		<li className={styles.container}>
			<article className={styles.article}>
				<ArticleImage url={props.article.image._url} title={props.article.title} />
				<div className={styles.wrapper}>
					<h2 className={styles.title}>
						<Link to={`/articles/${props.article.slug}`}>{props.article.title}</Link>
					</h2>
					<div className={styles.text}>
						<p>{props.article.shortText}</p>
					</div>
				</div>
			</article>
		</li>
	);
};

ArticleListItem.propTypes = {
	article: PropTypes.object.isRequired,
};
export default ArticleListItem;

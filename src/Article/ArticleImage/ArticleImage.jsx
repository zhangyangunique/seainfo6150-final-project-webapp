import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
	return (
		<img className={styles.image} src={props.url} alt={props.title} />
	);
};

ArticleImage.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default ArticleImage; 

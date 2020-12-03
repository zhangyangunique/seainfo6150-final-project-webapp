import React, { useState } from "react";
import styles from "./Comment.module.css";

const Comment = () => {
	const [submittedForm, setSubmittedForm] = useState();
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		setSubmittedForm(data);
	};

	return (
		<div className={styles.comment}>
			<h2>Feel free to leave a comment</h2>
			{
				submittedForm ? (
					<div className={styles.commentText}>You have successfully left the comment: {submittedForm.get("commentText")}</div>
				) : (
						<form className={styles.commentForm} onSubmit={onSubmit}>
							<textarea className={styles.textarea} name="commentText"></textarea>
							<input className={styles.submitButton} type="submit" />
						</form>
					)
			}
		</div>
	)
}

export default Comment;
import React, { useState } from "react";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
	const [submittedForm, setSubmittedForm] = useState();
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		setSubmittedForm(data);
	};

	return (
		<div>
			<h2>Sign Up Now</h2>
			{
				submittedForm ? (
					<div className={styles.registeredText}>Thank you {submittedForm.get("firstName")}! You have successfully registered with email address {submittedForm.get("email")}</div>
				) : (
						<form className={styles.signupForm} onSubmit={onSubmit}>
							<div className={styles.formGroup}>
								<label htmlFor="firstName">First Name</label>
								<input
									className={styles.formControl}
									type="text" name="firstName"
									required="required"
									pattern="[a-zA-Z]{1,20}"
									title="only letters, maximum is 20 characters"
									id="firstName"
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="lastName">Last Name</label>
								<input
									className={styles.formControl}
									type="text"
									name="lastName"
									required="required"
									pattern="[a-zA-Z]{1,20}"
									title="only letters, maximum is 20 characters"
									id="lastName"
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="userName">User Name</label>
								<input
									className={styles.formControl}
									type="text"
									name="userName"
									required="required"
									id="userName"
									pattern="[a-zA-Z0-9]{1,20}"
									title="only letters, numbers, maximum is 20 characters"
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="email">Email Address</label>
								<input className={styles.formControl} type="email" name="email" required="required" id="email" />
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="password">Password</label>
								<input
									className={styles.formControl}
									type="password" name="password"
									required="required"
									pattern="[\s\S]{6,30}"
									title="password length should between 6 and 30 characters"
									id="password" />
							</div>
							<div className={styles.formGroup}>
								<div className={styles.gender}>
									<label>Gender:</label>
									<label>
										Male
                                        <input
											type="radio"
											id="male"
											name="gender"
											checked="checked"
											value="male"
										/>
									</label>
									<label>
										Female
                                        <input
											type="radio"
											id="female"
											name="gender"
											checked="checked"
											value="female"
										/>
									</label>
									<label>
										Other
                                        <input
											type="radio"
											id="other"
											name="gender"
											checked="checked"
											value="other"
										/>
									</label>
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.country}>
									<label for="country">Country:</label>
									<select id="country" name="country" className={styles.dropdownForm}>
										<option value="usa">United States</option>
										<option value="canada">Canada</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.profession}>
									<label for="profession">Profession:</label>
									<select id="profession" name="profession" className={styles.dropdownForm}>
										<option value="student">Student</option>
										<option value="teacher">Teacher</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>
							<div className={styles.formGroup}>
								<input className={`${styles.formControl} ${styles.submitButton}`} type="submit" value="Submit" />
							</div>
						</form>
					)
			}
		</div>
	)
}

export default SignupPage
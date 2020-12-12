import React from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import ArticleDetailPage from "./ArticleDetailPage/ArticleDetailPage.jsx";
import styles from "./App.module.css";
import SignupPage from "./SignupPage/SignupPage.jsx";
import CategoryPage from "./CategoryPage/CategoryPage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";
import CategorySelectPage from "./CategorySelectPage/CategorySelectPage.jsx";

function App() {
	return (
		<>
			<HashRouter>
				<header>
					<nav>
						<ul>
							{/* these links should show you how to connect up a link to a specific route */}
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<div className={styles.dropdown}>
									<Link to="/category">Category</Link>
									<div className={styles.dropdownContent}>
										<li>
											<Link to="/category/sport">Sport</Link>
										</li>
										<li>
											<Link to="/category/food">Food</Link>
										</li>
										<li>
											<Link to="/category/history">History</Link>
										</li>
										<li>
											<Link to="/category/tourism">Tourism</Link>
										</li>
									</div>
								</div>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
					</nav>
				</header>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={AboutPage} />
					<Route path="/signup" exact component={SignupPage} />
					<Route path="/category" exact component={CategorySelectPage} />
					{/* passing parameters via a route path */}
					<Route
						path="/category/:categoryId"
						exact
						render={({ match }) => (
							// getting the parameters from the url and passing
							// down to the component as props
							<CategoryPage
								categoryId={match.params.categoryId}
							/>
						)}
					/>
					<Route
						path="/articles/:slug"
						exact
						render={({ match }) => (
							// getting the parameters from the url and passing
							// down to the component as props
							<ArticleDetailPage
								slug={match.params.slug}
							/>
						)}
					/>
					<Route component={Error} />
				</Switch>
			</HashRouter>
		</>
	);
}

export default App;

import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-info mb-5">
			<div className="container-fluid">
				<a className="navbar-brand text-dark" href="#">ReactJS</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarScroll">
				<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/user-form"}>Form</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/c-vs-i"}>Composition vs Inheritance</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/code-splitting"}>Code Splitting</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/context"}>Context</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/portal"}>Portal</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/refs"}>Refs</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/hooks"}>Hooks</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/custom-hooks"}>Custom Hooks</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/http-requests"}>HTTP Requests</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/wallet"}>Redux</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/error-boundary"}>ErrorBoundary</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-dark" aria-current="page" to={"/replace-redux"}>ReplaceRedux</Link>
					</li>
				</ul>
				</div>
			</div>
			</nav>
	);
}
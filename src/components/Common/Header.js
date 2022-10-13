import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Header() {
	const location = useLocation();

	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-info">
			<div className="container-fluid">
				<Link className="navbar-brand text-dark" to={"/"}>ReactJS</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarScroll">
				<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
					<li className={"nav-item"+((location.pathname=='/user-form')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/user-form"}>Form</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/c-vs-i')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/c-vs-i"}>Composition vs Inheritance</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/code-splitting')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/code-splitting"}>Code Splitting</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/context')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/context"}>Context</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/portal')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/portal"}>Portal</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/refs')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/refs"}>Refs</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/hooks')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/hooks"}>Hooks</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/custom-hooks')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/custom-hooks"}>Custom Hooks</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/http-requests')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/http-requests"}>HTTP Requests</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/wallet')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/wallet"}>Redux</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/error-boundary')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/error-boundary"}>ErrorBoundary</Link>
					</li>
					<li className={"nav-item"+((location.pathname=='/replace-redux')?' active':'')}>
						<Link className={"nav-link text-dark"} aria-current="page" to={"/replace-redux"}>ReplaceRedux</Link>
					</li>
				</ul>
				</div>
			</div>
			</nav>
	);
}
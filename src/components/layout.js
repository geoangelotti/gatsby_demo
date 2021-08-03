import React from 'react';
import { Link } from 'gatsby'
import { title, navBar } from '../css/layout.module.css'

const Layout = ({children, pageTitle}) => {
	return (
		<main>
			<h1 className={title}>{pageTitle}</h1>
			<nav>
				<ul>
					<li className={navBar}>
						<Link to='/'>Home</Link>
					</li>
					<li className={navBar}>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
			{children}
		</main>
	);
};

export default Layout;
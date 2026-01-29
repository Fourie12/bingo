import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage({ darkMode, setDarkMode }) {
	const [sidebarVisible, setSidebarVisible] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	
	// Mobile resize
	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 1000);
			if (window.innerWidth > 1000) setSidebarVisible(true);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="main-content">
			{isMobile && (
				<button
					className="sidebar-toggle-btn"
					onClick={() => setSidebarVisible(!sidebarVisible)}
				>
					☰
				</button>
			)}

			<section className="home-container">
				<h1>Lets play some BINGO</h1>
				

				<section className="board" id="board">
					
				</section>
			</section>

			<aside className={`sticky-sidebar ${sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
				<nav className="sidebar-nav">
					Do some buttons to reset here
					<a href="#education">Education</a>
					<a href="#experience">Experience / Skills</a>
					<a href="#projects">Projects</a>
					<a href="#additional-experience">Additional Experience</a>
					<a href="#documents">Documents</a>
				</nav>

				<button
					className="sidebar-dark-toggle"
					onClick={() => setDarkMode(!darkMode)}
				>
					Toggle {darkMode ? 'Light' : 'Dark'} Mode
				</button>
			</aside>
		</div>
	);
}

export default HomePage;

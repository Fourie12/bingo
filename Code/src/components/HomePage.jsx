import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage({ darkMode, setDarkMode }) {
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [maxNumber, setMaxNumber] = useState(75);
	const [boardLoaded, setBoardLoaded] = useState(false);
	const [selectedNumbers, setSelectedNumbers] = useState([]);
	
	// Mobile resize
	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 1000);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleReset = () => {
		setSelectedNumbers([]);
		console.log('Board reset');
	};

	const handleLoadBoard = () => {
		setBoardLoaded(true);
		setSelectedNumbers([]);
		console.log(`Loading board with ${maxNumber} numbers`);
	};

	const handleNumberClick = (number) => {
		if (selectedNumbers.includes(number)) {
			setSelectedNumbers(selectedNumbers.filter(n => n !== number));
		} else {
			setSelectedNumbers([...selectedNumbers, number]);
		}
	};

	const incrementMaxNumber = () => {
		setMaxNumber(prev => Math.min(prev + 1, 999));
	};

	const decrementMaxNumber = () => {
		setMaxNumber(prev => Math.max(prev - 1, 1));
	};

	const handleMaxNumberChange = (e) => {
		const value = parseInt(e.target.value);
		if (!isNaN(value) && value > 0 && value <= 999) {
			setMaxNumber(value);
		} else if (e.target.value === '') {
			setMaxNumber('');
		}
	};

	// Get last three selected numbers (in order they were clicked)
	const getLastThreeNumbers = () => {
		return selectedNumbers.slice(-3).reverse();
	};

	const lastThree = getLastThreeNumbers();

	// Determine data-count attribute for dynamic font sizing
	const getCountAttribute = () => {
		if (maxNumber <= 30) return '1-30';
		if (maxNumber <= 60) return '31-60';
		if (maxNumber <= 90) return '61-90';
		if (maxNumber <= 150) return '91-150';
		return '151-999';
	};

	return (
		<div className="main-content">
			{/* Hamburger button always visible */}
			<button
				className="sidebar-toggle-btn"
				onClick={() => setSidebarVisible(!sidebarVisible)}
			>
				☰
			</button>

			<section className="home-container">			
				<div className="bingo-layout">
					<section 
						className="board" 
						id="board"
						data-count={boardLoaded ? getCountAttribute() : ''}
					>
						{boardLoaded ? (
							Array.from({ length: maxNumber }, (_, i) => i + 1).map(number => (
								<div
									key={number}
									className={`number-tile ${selectedNumbers.includes(number) ? 'selected' : ''}`}
									onClick={() => handleNumberClick(number)}
								>
									{number}
								</div>
							))
						) : (
							<div className="board-placeholder">
								<p>Set the number range and click "Load Board" to start</p>
							</div>
						)}
					</section>

					{boardLoaded && (
						<aside className="number-history">
							<div className="last-number-container">
								{lastThree[0] ? (
									<div className="last-number large main">
										{lastThree[0]}
									</div>
								) : (
									<div className="last-number large empty">-</div>
								)}
							</div>
							<div className="previous-numbers-container">
								{lastThree[1] ? (
									<div className="last-number small">
										{lastThree[1]}
									</div>
								) : (
									<div className="last-number small empty">-</div>
								)}
								{lastThree[2] ? (
									<div className="last-number small">
										{lastThree[2]}
									</div>
								) : (
									<div className="last-number small empty">-</div>
								)}
							</div>
						</aside>
					)}
				</div>
			</section>

			<aside className={`sticky-sidebar ${sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
				<nav className="sidebar-nav">
					<h3>Control Panel</h3>
					
					<div className="number-selector">
						<label>Max Number:</label>
						<div className="number-input-group">
							<button 
								className="control-btn small-btn"
								onClick={decrementMaxNumber}
							>
								-
							</button>
							<input
								type="number"
								className="number-input"
								value={maxNumber}
								onChange={handleMaxNumberChange}
								min="1"
								max="999"
							/>
							<button 
								className="control-btn small-btn"
								onClick={incrementMaxNumber}
							>
								+
							</button>
						</div>
					</div>

					<button 
						className="control-btn load-btn"
						onClick={handleLoadBoard}
					>
						Load Board
					</button>

					<button 
						className="control-btn reset-btn"
						onClick={handleReset}
						disabled={!boardLoaded}
					>
						Reset Board
					</button>
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

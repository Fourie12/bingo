# Bingo Board Web App

A responsive, interactive Bingo board built with **React** and **CSS
Grid**.\
Designed for real-time number calling with a fixed 10-column layout,
number history tracking, and a control panel.

------------------------------------------------------------------------

## Deployed
This code is also deployed and can be used without running it.
Find it here: https://fourie12.github.io/bingo/

------------------------------------------------------------------------

## Features

-   **Dynamic Bingo Board**
    -   Configurable maximum number (1--999)
    -   Fixed 10-column layout for easy visual tracking
    -   Scrollable board for smaller screens
-   **Number Selection**
    -   Click numbers to mark/unmark them
    -   Selected numbers are visually highlighted
-   **Call History Panel**
    -   Displays the **last three selected numbers**
    -   Latest number is highlighted as the current call
    -   Previous two remain neutral for context
-   **Control Panel (Sidebar)**
    -   Set maximum number
    -   Load board
    -   Reset board
    -   Toggle dark/light mode
    -   Slide-in hamburger menu
-   **Responsive Design**
    -   Works on mobile, laptop, and large displays
    -   Board scrolls vertically when needed
    -   Tiles scale automatically with screen size
    -   Browser zoom can be used to fine-tune how the board fits on your
        display

------------------------------------------------------------------------

## Usage Notes

-   The board always uses **10 columns** for consistent visual tracking.
-   On smaller screens, the board becomes **vertically scrollable**.
-   On larger screens, tiles scale up automatically.
-   You can use your browser's **zoom in/out (Ctrl + / Ctrl -)** to
    fine-tune the size of the board so it fits your screen comfortably.

------------------------------------------------------------------------

## Tech Stack

-   React (Hooks)
-   CSS Grid & Flexbox
-   No external UI libraries

------------------------------------------------------------------------

## Running the Project

make install
make dev-run

------------------------------------------------------------------------

## License

Free to use and modify for personal or educational projects.

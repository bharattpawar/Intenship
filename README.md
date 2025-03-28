# Business Analytics Dashboard

This project is a business analytics dashboard built with React and Redux, enabling users to submit queries and visualize the results using Chart.js. The application supports features such as query history, dynamic data visualization, and an intuitive user interface.
Link : https://inten-ai-bharatpawar.netlify.app/
## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

 
 

## Project Structure

Here's an overview of the project's structure:

```
business-analytics-dashboard/
├── src/
│   ├── components/
│   │   ├── DashboardStats.js
│   │   ├── Header.js
│   │   ├── QueryInput.js
│   │   ├── QueryHistory.js
│   │   └── ResultsDisplay.js
│   ├── redux/
│   │   ├── actionTypes.js
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Features

- **React 18**: Utilizes the latest features and API, including `createRoot`.
- **Redux**: State management with actions, reducers, and a store.
- **Chart.js**: Data visualization with dynamic and responsive charts.
- **Query History**: Tracks and displays past queries with timestamps.
- **Mock Data Generation**: Simulates realistic business data for testing.

## Usage

1. **Submit a Query**: Enter a natural language query in the input field and submit.
2. **View Results**: The results will be displayed in a dynamic chart.
3. **Query History**: Click on past queries to re-submit them.
4. **Clear History**: Clear all past queries from the history.

### Example Queries

- Show monthly sales for last 6 months
- What were our top products last quarter?
- Compare revenue between current and previous year
- Display customer growth rate by month

 
 

 

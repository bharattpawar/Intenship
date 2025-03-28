import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitQuery, querySuccess, queryError, clearHistory } from './redux/actions';
import Header from './components/Header';
import QueryInput from './components/QueryInput';
import ResultsDisplay from './components/ResultsDisplay';
import QueryHistory from './components/QueryHistory';
import './styles/main.css';

const SAMPLE_QUERIES = [
  "Show monthly sales for last 6 months",
  "What were our top products last quarter?",
  "Compare revenue between current and previous year",
  "Display customer growth rate by month"
];

function App() {
  const dispatch = useDispatch();
  const { queries, loading, error, results } = useSelector(state => state);
  const [activeTab, setActiveTab] = useState('analysis');
  const [showSampleQueries, setShowSampleQueries] = useState(true);

  const handleQuerySubmit = (query) => {
    if (!query.trim()) return;
    
    dispatch(submitQuery(query));
    setShowSampleQueries(false);
    
    setTimeout(() => {
      try {
        const mockData = generateMockData(query);
        dispatch(querySuccess({ 
          query, 
          data: mockData,
          timestamp: new Date().toLocaleString()
        }));
      } catch (err) {
        dispatch(queryError("Our AI engine couldn't process this query. Please try rephrasing."));
      }
    }, 1500);
  };

  const generateMockData = (query) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const currentData = months.map(month => ({
      name: month,
      value: Math.floor(Math.random() * 5000) + 1000,
      growth: Math.floor(Math.random() * 30) - 5
    }));

    return {
      chartData: currentData,
      summary: `Analysis of: "${query}"`,
      metrics: {
        total: currentData.reduce((sum, item) => sum + item.value, 0),
        average: Math.round(currentData.reduce((sum, item) => sum + item.value, 0) / currentData.length),
        growth: Math.round(currentData[currentData.length - 1].value / 5000 * 100 - 100),
        peak: Math.max(...currentData.map(item => item.value))
      }
    };
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all query history?')) {
      dispatch(clearHistory());
    }
  };

  return (
    <div className="app">
      <Header 
        onTabChange={setActiveTab}
        activeTab={activeTab}
      />
      
      <main className="dashboard-container">
        {results?.data && (
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Total</h3>
              <p className="stat-value">${results.data.metrics.total.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <h3>Average</h3>
              <p className="stat-value">${results.data.metrics.average.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <h3>Growth</h3>
              <p className={`stat-value ${results.data.metrics.growth >= 0 ? 'positive' : 'negative'}`}>
                {results.data.metrics.growth >= 0 ? '+' : ''}{results.data.metrics.growth}%
              </p>
            </div>
          </div>
        )}

        <section className={`query-section ${activeTab !== 'analysis' ? 'hidden' : ''}`}>
          <QueryInput 
            onSubmit={handleQuerySubmit}
            showSuggestions={showSampleQueries}
            suggestions={SAMPLE_QUERIES}
          />
          
          {loading && (
            <div className="processing-message">
              <div className="loader"></div>
              <p>Analyzing your business data...</p>
            </div>
          )}
          
          <ResultsDisplay 
            data={results?.data} 
            loading={loading} 
            error={error} 
          />
        </section>

        <section className={`history-section ${activeTab !== 'history' ? 'hidden' : ''}`}>
          <div className="history-header">
            <h2>Query History</h2>
            {queries.length > 0 && (
              <button 
                onClick={handleClearHistory}
                className="clear-history-btn"
              >
                Clear History
              </button>
            )}
          </div>
          
          {queries.length > 0 ? (
            <QueryHistory 
              queries={queries} 
              onQueryClick={handleQuerySubmit} 
            />
          ) : (
            <div className="empty-state">
              <p>Your query history will appear here</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
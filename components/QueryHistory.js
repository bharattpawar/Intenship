import React from 'react';
 
function QueryHistory({ queries, onQueryClick, onClearHistory }) {
  return (
    <div className="query-history-container">
      
      {queries.length === 0 ? (
        <div className="empty-history">
          <p>Your search history will appear here</p>
        </div>
      ) : (
        <ul className="history-list">
          {queries.map((item, index) => (
            <li 
              key={`${item.timestamp}-${index}`}
              className="history-item"
              onClick={() => onQueryClick(item.query)}
            >
              <div className="query-content">
                <p className="query-text">{item.query}</p>
                <p className="query-timestamp">{item.timestamp}</p>
              </div>
              <button 
                className="rerun-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onQueryClick(item.query);
                }}
                aria-label={`Rerun: ${item.query}`}
              >
                ↻ Run Again
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QueryHistory;
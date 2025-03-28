import React from 'react';
import "./Suggestions.css"
function Suggestions({ suggestions, onSuggestionClick, active }) {
  if (!active || !suggestions.length) return null;

  return (
    <div className="suggestions-container">
      <div className="suggestions-header">
        <span>Try asking:</span>
      </div>
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li 
            key={index}
            className="suggestion-item"
            onClick={() => onSuggestionClick(suggestion)}
          >
            <div className="suggestion-icon">↗</div>
            <div className="suggestion-text">{suggestion}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
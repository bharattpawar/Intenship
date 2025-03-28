import React, { useState, useEffect, useRef } from 'react';
import Suggestions from './Suggestions';
import './QueryInput.css';

function QueryInput({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const inputRef = useRef(null);
  
  const SAMPLE_QUERIES = [
    "Show monthly sales for last 6 months",
    "What were our top products last quarter?",
    "Compare revenue between current and previous year",
    "Display customer growth rate by month"
  ];

  useEffect(() => {
    if (query.length > 0) {
      setHasTyped(true);
      setShowSuggestions(false);
    } else {
      setHasTyped(false);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
       setQuery('');
      setHasTyped(false);
      setShowSuggestions(false);
      inputRef.current?.focus();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    onSubmit(suggestion);
    setShowSuggestions(false);
    setHasTyped(true);
    inputRef.current?.focus();
  };

  return (
    <div className="query-input-container">
      <form onSubmit={handleSubmit} className="query-form">
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => !hasTyped && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Ask about your business data..."
            aria-label="Business data query input"
          />
          <button 
            type="submit" 
            className={`submit-btn ${!query.trim() ? 'disabled' : ''}`}
            disabled={!query.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
        <Suggestions 
          suggestions={SAMPLE_QUERIES}
          onSuggestionClick={handleSuggestionClick}
          active={showSuggestions && !hasTyped}
        />
      </form>
    </div>
  );
}

export default QueryInput;
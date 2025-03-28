import React from 'react';

function DashboardStats({ metrics }) {
  if (!metrics) return null;

  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total</h3>
        <p className="stat-value">${metrics.total.toLocaleString()}</p>
        <p className="stat-label">All Periods</p>
      </div>
      
      <div className="stat-card">
        <h3>Average</h3>
        <p className="stat-value">${metrics.average.toLocaleString()}</p>
        <p className="stat-label">Per Month</p>
      </div>
      
      <div className="stat-card">
        <h3>Growth</h3>
        <p className={`stat-value ${metrics.growth >= 0 ? 'positive' : 'negative'}`}>
          {metrics.growth >= 0 ? '+' : ''}{metrics.growth}%
        </p>
        <p className="stat-label">YoY Change</p>
      </div>
      
      <div className="stat-card">
        <h3>Peak</h3>
        <p className="stat-value">${metrics.peak.toLocaleString()}</p>
        <p className="stat-label">Highest Month</p>
      </div>
    </div>
  );
}

export default DashboardStats;
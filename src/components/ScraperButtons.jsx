import React from 'react';
import { SCRAPERS } from '../api/scrapeApi';

/**
   * ScraperButtons - renders all scraper trigger buttons for one task item.
   * Props:
 *   onRun(endpoint: string) - callback when a scraper button is clicked
 *   loading: string|null    - currently running endpoint key (disables all buttons)
 */
const ScraperButtons = ({ onRun, loading }) => {
  return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', margin: '4px 0' }}>
    {SCRAPERS.map(({ key, label }) => (
            <button
              key={key}
              disabled={!!loading}
              onClick={() => onRun(key)}
              style={{
                backgroundColor: loading === key ? '#a8e6a3' : '#d3fbd8',
                borderRadius: '5px',
                border: '1px solid #91dd91',
                padding: '3px 8px',
                fontSize: '11px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading && loading !== key ? 0.6 : 1,
    }}
            >
    {loading === key ? `${label}...` : label}
        </button>
                ))}
              </div>
            );
};

export default ScraperButtons;

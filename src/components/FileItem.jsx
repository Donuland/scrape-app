import React from 'react';
import ScraperButtons from './ScraperButtons';

const FileItem = ({ object, scraperLoading, onEdit, onDelete, onToggleRunning, onRun, onDownload }) => {
  const { id, title, partner, done, overall, running } = object;
  const progress = overall > 0 ? (done / overall) * 100 : 0;

  return (
        <li style={{
          display: 'flex', flexDirection: 'column', gap: '6px',
          border: '1px solid gainsboro', borderRadius: '7px',
          listStyleType: 'none', padding: '8px 12px',
          background: `linear-gradient(to right, #00c9c8 0%, #00c9c8 ${progress}%, #bffcf9 ${progress}%, #bffcf9 100%)`,
    }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
            <input type="checkbox" title="Mark as running" checked={running}
          onChange={(e) => onToggleRunning(object, e.target.checked)} />
            <span style={{ fontWeight: 'bold', minWidth: '120px' }}>{title}</span>
            <span style={{ fontWeight: 'bold', color: '#555' }}>{partner}</span>
            <span style={{ color: '#333', fontSize: '13px' }}>
    {done}/{overall}
{overall > 0 && <span style={{ marginLeft: '4px', color: '#0077aa' }}>({Math.round(progress)}%)</span>}
        </span>
          <div style={{ display: 'flex', gap: '4px', marginLeft: 'auto' }}>
            <button onClick={() => onEdit(object)}
              style={{ backgroundColor: '#a3cfcd', borderColor: '#a3cfcd', borderRadius: '5px', padding: '3px 10px', cursor: 'pointer' }}>Edit</button>
            <button onClick={() => onDelete(id)}
              style={{ backgroundColor: '#cf9eac', borderColor: '#cf9eac', borderRadius: '5px', padding: '3px 10px', cursor: 'pointer' }}>Delete</button>
            <button onClick={() => onDownload(object)}
              style={{ backgroundColor: '#c6c6c6', borderColor: '#c6c6c6', borderRadius: '5px', padding: '3px 10px', cursor: 'pointer' }}>Download</button>
          </div>
        </div>
        <ScraperButtons onRun={(endpoint) => onRun(id, endpoint)} loading={scraperLoading} />
      </li>
    );
  };

  export default FileItem;

import React from 'react';

/**
 * UploadForm - form for creating a new task or editing an existing one.
 * Props:
 *   editingId: number|null  - if set, form is in edit mode
 *   title: string
 *   partner: string
 *   file: File|string|null
 *   loading: bool
 *   onTitleChange(val)
 *   onPartnerChange(val)
 *   onFileChange(file)
 *   onSubmit(e)
 *   onCancel()
 */
const UploadForm = ({
    editingId,
    title,
    partner,
    file,
    loading,
    onTitleChange,
    onPartnerChange,
    onFileChange,
    onSubmit,
    onCancel,
}) => {
    const isEditing = editingId !== null;

    // Show just the filename when editing (file is a URL string from backend)
    const fileLabel = typeof file === 'string'
      ? file.replace(/.*\//, '')
          : file
        ? file.name
            : '';

    const inputStyle = {
          borderRadius: '5px',
          margin: '5px',
          color: 'darkSlateBlue',
          padding: '4px 8px',
          border: '1px solid #ccc',
          width: '200px',
    };

    return (
          <div
                  style={{
                            padding: '15px',
                            margin: 'auto',
                            width: '60%',
                            minWidth: '280px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            background: '#fafafa',
                  }}
                >
                <h2 style={{ marginTop: 0 }}>{isEditing ? 'Edit task' : 'Upload file'}</h2>h2>
          
                <form onSubmit={onSubmit}>
                  {/* Title */}
                        <div style={{ marginBottom: '8px' }}>
                                  <label style={{ display: 'inline-block', width: '70px' }}>Title:</label>label>
                                  <input
                                                type="text"
                                                style={inputStyle}
                                                value={title}
                                                onChange={(e) => onTitleChange(e.target.value)}
                                                required
                                              />
                        </div>div>
                
                  {/* File - only shown when creating a new task */}
                  {!isEditing && (
                            <div style={{ marginBottom: '8px' }}>
                                        <label style={{ display: 'inline-block', width: '70px' }}>File:</label>label>
                                        <input
                                                        type="file"
                                                        style={{ margin: '5px' }}
                                                        onChange={(e) => onFileChange(e.target.files[0])}
                                                        required
                                                      />
                            </div>div>
                        )}
                
                  {/* Show current filename when editing */}
                  {isEditing && fileLabel && (
                            <div style={{ marginBottom: '8px', color: '#555', fontSize: '13px' }}>
                                        <label style={{ display: 'inline-block', width: '70px' }}>File:</label>label>
                                        <span style={{ color: 'darkSlateBlue' }}>{fileLabel}</span>span>
                            </div>div>
                        )}
                
                  {/* Partner */}
                        <div style={{ marginBottom: '12px' }}>
                                  <label style={{ display: 'inline-block', width: '70px' }}>Partner:</label>label>
                                  <input
                                                type="text"
                                                style={inputStyle}
                                                value={partner}
                                                onChange={(e) => onPartnerChange(e.target.value)}
                                              />
                        </div>div>
                
                  {/* Buttons */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                                  <button
                                                type="submit"
                                                disabled={loading}
                                                style={{
                                                                borderRadius: '5px',
                                                                borderColor: 'lightSteelBlue',
                                                                backgroundColor: 'lightSteelBlue',
                                                                padding: '6px 16px',
                                                                cursor: loading ? 'not-allowed' : 'pointer',
                                                }}
                                              >
                                    {loading ? 'Saving...' : isEditing ? 'Update' : 'Upload'}
                                  </button>button>
                        
                          {isEditing && (
                              <button
                                              type="button"
                                              onClick={onCancel}
                                              style={{
                                                                borderRadius: '5px',
                                                                padding: '6px 16px',
                                                                background: '#eee',
                                                                border: '1px solid #ccc',
                                                                cursor: 'pointer',
                                              }}
                                            >
                                            Cancel
                              </button>button>
                                  )}
                        </div>div>
                </form>form>
          </div>div>
        );
};

export default UploadForm;</div>

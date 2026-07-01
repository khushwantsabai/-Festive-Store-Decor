import React, { useState } from 'react';

export default function Settings() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Settings</h2>
      
      <div className="card" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>General Settings</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: '500', display: 'block' }}>Enable App</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Turn the app features on or off in your store.</span>
            </div>
            <div 
              onClick={() => setEnabled(!enabled)}
              style={{ 
                width: '40px', 
                height: '24px', 
                backgroundColor: enabled ? 'var(--success)' : '#E2E8F0', 
                borderRadius: '999px', 
                position: 'relative', 
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              <div style={{ 
                width: '20px', 
                height: '20px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                position: 'absolute', 
                left: enabled ? '18px' : '2px', 
                top: '2px',
                transition: 'left 0.2s'
              }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
            <button className="btn btn-primary">Save Changes</button>
          </div>

        </div>
      </div>
    </div>
  );
}

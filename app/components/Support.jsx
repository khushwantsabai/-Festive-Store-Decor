import React from 'react';
import { Search, FileText, MessageCircle } from 'lucide-react';

export default function Support() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Support</h2>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.75rem 2rem', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', fontWeight: 'bold', cursor: 'pointer' }}>Help Center</div>
          <div style={{ padding: '0.75rem 2rem', color: 'var(--text-muted)', cursor: 'pointer' }}>Contact Us</div>
        </div>

        <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
            <Search size={16} />
          </span>
          <input type="text" placeholder="Search for help articles..." style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }} />
        </div>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, overflowY: 'auto' }}>
          {[
            'Getting Started Guide',
            'How to Create Campaign',
            'How to Use Templates',
            'Customize Banners',
            'Popup Builder Guide',
            'Snow Animation Settings',
            'Analytics & Reports',
            'Billing & Plans',
            'FAQ'
          ].map(article => (
            <li key={article} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)', cursor: 'pointer', fontSize: '0.875rem' }}>
              <FileText size={16} color="var(--text-muted)" /> {article}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0' }}>
          <button className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <MessageCircle size={18} /> Live Chat
          </button>
        </div>

      </div>
    </div>
  );
}

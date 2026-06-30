import React from 'react';
import { Bell, User, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dashboard</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={() => navigate('/app/pricing')} className="btn btn-primary" style={{ fontSize: '0.875rem' }}>Upgrade Plan</button>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#1E293B', 
        borderRadius: '18px', 
        padding: '2rem', 
        color: 'white', 
        marginBottom: '1.5rem',
        backgroundImage: 'linear-gradient(to right, #1E293B, #0F172A)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Christmas Sale is Live! 🎄</h3>
          <p style={{ marginBottom: '1.5rem', color: '#CBD5E1' }}>Your store looks amazing. Keep it up!</p>
          <button className="btn" style={{ backgroundColor: 'white', color: '#1E293B' }}>View Store</button>
        </div>
        <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}>
          {/* Decorative graphic placeholder */}
          <span style={{ fontSize: '6rem', position: 'absolute', right: '10%', top: '10%' }}>🎅🦌</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '12px' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Active Campaign</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ fontWeight: 'bold' }}>Christmas Sale</p>
            <span style={{ backgroundColor: '#D1FAE5', color: 'var(--success)', padding: '2px 8px', borderRadius: '999px', fontSize: '0.75rem' }}>Live</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>30 Dec 2024 - 27 Dec 2024</p>
        </div>
        <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '12px' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Next Campaign</p>
          <p style={{ fontWeight: 'bold' }}>New Year Sale</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Starts in 8 Days</p>
        </div>
        <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '12px' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Total Views</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>24,563</p>
            <span style={{ color: 'var(--success)', fontSize: '0.875rem' }}>+12.5%</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div style={{ flex: 2 }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Recent Campaigns</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E2E8F0', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.75rem 0' }}>Campaign</th>
                <th>Type</th>
                <th>Status</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {[['Christmas Sale', 'Banner & Snow', 'Live', '24,563'],
                ['Black Friday Sale', 'Popup', 'Ended', '20,154'],
                ['Diwali Dhamaka', 'Banner', 'Ended', '18,965']].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '0.75rem 0', fontWeight: '500' }}>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>
                    <span style={{ backgroundColor: row[2] === 'Live' ? '#D1FAE5' : '#F1F5F9', color: row[2] === 'Live' ? 'var(--success)' : 'var(--text-muted)', padding: '2px 8px', borderRadius: '999px', fontSize: '0.75rem' }}>
                      {row[2]}
                    </span>
                  </td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ flex: 1, backgroundColor: 'var(--background)', padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Actions</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Create Campaign', 'Browse Templates', 'Create Popup', 'Add Snow Effect', 'Schedule Campaign'].map(action => (
              <li key={action} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', cursor: 'pointer', fontWeight: '500', fontSize: '0.9rem' }}>
                <PlusCircle size={16} /> {action}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

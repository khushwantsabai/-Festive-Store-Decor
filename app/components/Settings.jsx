import React from 'react';
import { Settings as SettingsIcon, MonitorPlay, CalendarDays, Sparkles, Bell, Code, Plug, Zap, ShieldCheck } from 'lucide-react';

const icons = {
  'General': <SettingsIcon size={16} />,
  'Display Rules': <MonitorPlay size={16} />,
  'Scheduler': <CalendarDays size={16} />,
  'Animations': <Sparkles size={16} />,
  'Notifications': <Bell size={16} />,
  'Custom Code': <Code size={16} />,
  'Integration': <Plug size={16} />,
  'Performance': <Zap size={16} />,
  'GDPR': <ShieldCheck size={16} />
};

export default function Settings() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Settings</h2>
      
      <div className="card" style={{ display: 'flex', gap: '2rem', padding: '0', overflow: 'hidden' }}>
        
        {/* Left Nav */}
        <div style={{ width: '200px', borderRight: '1px solid #E2E8F0', padding: '1rem' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            {['General', 'Display Rules', 'Scheduler', 'Animations', 'Notifications', 'Custom Code', 'Integration', 'Performance', 'GDPR'].map(item => (
              <li key={item} style={{ 
                padding: '0.5rem 1rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                backgroundColor: item === 'General' ? 'rgba(108, 76, 241, 0.1)' : 'transparent',
                color: item === 'General' ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: item === 'General' ? '600' : '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                {icons[item]} {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Form */}
        <div style={{ flex: 1, padding: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '2rem' }}>General Settings</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500' }}>Enable App</span>
              <div style={{ width: '40px', height: '24px', backgroundColor: 'var(--success)', borderRadius: '999px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Timezone</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', color: 'var(--text-dark)' }}>
                <option>(GMT+05:30) Asia/Kolkata</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Default Language</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', color: 'var(--text-dark)' }}>
                <option>English</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Date Format</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', color: 'var(--text-dark)' }}>
                <option>DD MMM YYYY</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500' }}>Auto Update Campaigns</span>
              <div style={{ width: '40px', height: '24px', backgroundColor: 'var(--success)', borderRadius: '999px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500' }}>Show App Badge</span>
              <div style={{ width: '40px', height: '24px', backgroundColor: '#E2E8F0', borderRadius: '999px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button className="btn btn-primary">Save Changes</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Palette, Settings, LifeBuoy, CreditCard, PenTool, LayoutTemplate } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Templates', path: '/templates', icon: <Palette size={20} /> },
    { name: 'Customize', path: '/editor', icon: <PenTool size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    { name: 'Support', path: '/support', icon: <LifeBuoy size={20} /> },
    { name: 'Pricing', path: '/pricing', icon: <CreditCard size={20} /> },
  ];

  return (
    <div className="sidebar" style={{ backgroundColor: 'white', borderRadius: '18px', boxShadow: 'var(--shadow)', padding: '1.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary)', borderRadius: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
          🎁
        </div>
        <div>
           <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1E293B', lineHeight: '1.2' }}>Festive Decor</h2>
           <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: '600', backgroundColor: '#F3E8FF', padding: '2px 6px', borderRadius: '4px' }}>Shopify App</span>
        </div>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '0.875rem 1rem', 
              borderRadius: '8px', 
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: '600' }}>Current Plan: Free</p>
          <NavLink to="/pricing" style={{ textDecoration: 'none' }}>
             <button className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem' }}>Upgrade Plan</button>
          </NavLink>
      </div>
    </div>
  );
}

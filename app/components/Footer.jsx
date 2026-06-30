export default function Footer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
      
      {/* Key Features Strip */}
      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.5rem' }}>Key Features</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {[
            { icon: '🧩', label: 'No Coding Needed' },
            { icon: '🖱️', label: 'Drag & Drop Builder' },
            { icon: '📱', label: 'Mobile Responsive' },
            { icon: '⏱️', label: 'Schedule & Forget' },
            { icon: '📈', label: 'Increase Sales' },
            { icon: '🎧', label: '24/7 Support' }
          ].map(feature => (
            <div key={feature.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(108, 76, 241, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'var(--primary)' }}>
                {feature.icon}
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Policy Block */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', marginTop: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>PRIVACY POLICY</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            We value your privacy. Festive Store Decor does not collect any personal data from your store customers.
          </p>
          <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><span style={{ color: 'var(--success)' }}>✔</span> We only access store data required for app functionality.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><span style={{ color: 'var(--success)' }}>✔</span> You can uninstall the app anytime.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><span style={{ color: 'var(--success)' }}>✔</span> We do not share data with third parties.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><span style={{ color: 'var(--success)' }}>✔</span> For more details, please read our full Privacy Policy.</li>
          </ul>
        </div>
        
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', backgroundColor: 'rgba(108, 76, 241, 0.1)', borderRadius: '16px' }}>
          <span style={{ fontSize: '2rem', color: 'var(--primary)' }}>🛡️</span>
        </div>
      </div>

    </div>
  );
}

export default function Header() {
  return (
    <div style={{ padding: '1rem', backgroundColor: 'transparent' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
        <img src="/logo.jpg" alt="Festive Store Decor" style={{ height: '3rem', marginRight: '1rem' }} />
        <span style={{ fontSize: '0.875rem', backgroundColor: 'rgba(108, 76, 241, 0.1)', color: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '999px', verticalAlign: 'middle' }}>Shopify App</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        Holiday Banner, Popup, Snow Animation & Festival Themes.
      </p>
      <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', maxWidth: '800px' }}>
        Decorate your store for every holiday & festival in minutes. No coding. No theme editing. Just select, customize, schedule & go live!
      </p>
      
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {['Holiday Banner Builder', 'Popup Builder', 'Festive Themes', 'Snow & Animation Effects', 'Countdown Timer', 'Schedule Campaigns', 'Advanced Targeting', 'Analytics & Reports'].map(feature => (
          <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--success)' }}>✔</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

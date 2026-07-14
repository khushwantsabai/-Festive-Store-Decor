import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '3rem 1.5rem', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      lineHeight: '1.6',
      color: '#334155'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0F172A', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#64748B' }}>Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>1. Introduction</h2>
          <p>
            Welcome to Festive Store Decor ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how your information is collected, used, and shared when you install or use the Festive Store Decor app (the "App") in connection with your Shopify-supported store.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>2. Information We Collect</h2>
          <p>
            When you install the App, we are automatically able to access certain types of information from your Shopify account. However, <strong>Festive Store Decor requires absolutely zero invasive permissions</strong>. We deliberately do not request access to your store's customers, orders, or product data.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Shop Information:</strong> We collect your shop's domain (e.g., myshopify.com URL) solely to authenticate and associate your saved templates with your store.</li>
            <li><strong>App Settings:</strong> We store the design configurations (colors, text, button labels) you create within the App so they can be displayed on your storefront via Shopify's secure App Metafields.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
          <p>We use the limited information we collect exclusively to provide and operate the App's core functionality, which includes:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Authenticating your login via Shopify.</li>
            <li>Saving and retrieving your custom festive banner designs.</li>
            <li>Injecting your designs into your storefront securely via Theme App Extensions.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>4. Sharing Your Information</h2>
          <p>
            We respect your privacy and <strong>do not sell, rent, or share your personal or store information</strong> with any third parties. Your data remains completely private and is used solely for the operation of the App.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>5. Data Retention & Deletion</h2>
          <p>
            We retain your shop's template configurations for as long as you have the App installed. If you uninstall the App, we receive a notification from Shopify and will automatically delete your configurations and session data within 48 hours to comply with GDPR and Shopify's data privacy requirements.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact our support team at:
          </p>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#F1F5F9', borderRadius: '8px', display: 'inline-block' }}>
            <p style={{ margin: 0, fontWeight: '600' }}>Email: support@sabaiinnovations.com</p>
          </div>
        </section>
      </div>

      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0', textAlign: 'center', color: '#94A3B8', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Festive Store Decor by Sabai Innovations. All rights reserved.
      </div>
    </div>
  );
}

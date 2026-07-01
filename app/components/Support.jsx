import React, { useState } from 'react';
import { Search, FileText, Mail, Phone, ArrowLeft } from 'lucide-react';

export default function Support() {
  const [activeTab, setActiveTab] = useState('help');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    { title: 'Getting Started Guide', content: 'Welcome to Festive Store Decor! To get started, navigate to the Dashboard to create your first seasonal campaign. You can easily enable or disable the app from the Settings page.' },
    { title: 'How to Create Campaign', content: 'Go to the Dashboard and click "New Campaign". Give it a name like "Black Friday Sale", choose your target dates, and select a festive template to match the season.' },
    { title: 'How to Use Templates', content: 'We offer a variety of pre-built templates for Christmas, Halloween, and New Year. Browse the Templates section and click on any design to preview and customize it for your store.' },
    { title: 'Customize Banners', content: 'Once you select a template, you can change the text, colors, and button links using the Editor. Make sure it matches your store\'s branding perfectly.' },
    { title: 'Popup Builder Guide', content: 'Popups are great for collecting emails or showing discount codes. Use our Popup Builder to set rules for when the popup should appear, such as exit-intent or after a certain time on page.' },
    { title: 'Snow Animation Settings', content: 'Add a magical touch to your store! Enable the snow animation in the General Settings. You can control the amount and speed of the snowflakes for the perfect winter vibe.' },
    { title: 'Analytics & Reports', content: 'Track how many views and clicks your festive decorations receive. Go to the Dashboard to view detailed reports and measure the success of your campaigns.' },
    { title: 'Billing & Plans', content: 'We offer flexible plans based on the number of active campaigns you need. Upgrade your plan anytime from the Pricing page to unlock more templates and features.' },
    { title: 'FAQ', content: 'Have a quick question? Check out our frequently asked questions. For example, "Will this slow down my store?" - No, our app is optimized to load asynchronously and won\'t impact your page speed.' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Support</h2>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
          <div 
            onClick={() => { setActiveTab('help'); setSelectedArticle(null); }}
            style={{ padding: '0.75rem 2rem', color: activeTab === 'help' ? 'var(--primary)' : 'var(--text-muted)', borderBottom: activeTab === 'help' ? '2px solid var(--primary)' : 'none', fontWeight: activeTab === 'help' ? 'bold' : 'normal', cursor: 'pointer' }}
          >
            Help Center
          </div>
          <div 
            onClick={() => { setActiveTab('contact'); setSelectedArticle(null); }}
            style={{ padding: '0.75rem 2rem', color: activeTab === 'contact' ? 'var(--primary)' : 'var(--text-muted)', borderBottom: activeTab === 'contact' ? '2px solid var(--primary)' : 'none', fontWeight: activeTab === 'contact' ? 'bold' : 'normal', cursor: 'pointer' }}
          >
            Contact Us
          </div>
        </div>

        {activeTab === 'help' && !selectedArticle && (
          <>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, overflowY: 'auto' }}>
              {articles.map(article => (
                <li 
                  key={article.title} 
                  onClick={() => setSelectedArticle(article)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)', cursor: 'pointer', fontSize: '0.875rem', padding: '0.5rem', borderRadius: '8px', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <FileText size={16} color="var(--text-muted)" /> {article.title}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 'help' && selectedArticle && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '1.5rem', fontSize: '0.875rem' }}
            >
              <ArrowLeft size={16} /> Back to Articles
            </button>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-dark)' }}>
              {selectedArticle.title}
            </h3>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem', padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              {selectedArticle.content}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Get in Touch</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center' }}>Have a question or need help? Send us a message.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Email Address</label>
                <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Message</label>
                <textarea placeholder="How can we help you?" rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', resize: 'vertical' }} />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>
                Send Message
              </button>
            </div>
            
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <Mail size={16} /> support@festivestoredecor.com
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

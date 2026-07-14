import React, { useState } from 'react';
import { Sparkles, Palette, PlayCircle, Clock, Edit3, Trash2 } from 'lucide-react';
import { useNavigate, useSubmit, Link } from 'react-router';

export default function Dashboard({ drafts = [] }) {
  const navigate = useNavigate();
  const submit = useSubmit();
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', position: 'relative' }}>
      
      {/* Background ambient glow */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle at 50% 50%, rgba(155, 28, 28, 0.15), transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.1), transparent 60%)', zIndex: 0, pointerEvents: 'none', borderRadius: '50%', filter: 'blur(40px)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1, flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '800', background: 'linear-gradient(90deg, var(--text-dark), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/logo.jpg" alt="Logo" style={{ height: '40px', borderRadius: '50%' }} /> Welcome back
        </h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/app/pricing')} style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '999px', 
            border: 'none', 
            fontWeight: '600', 
            cursor: 'pointer',
            boxShadow: '0 10px 25px -5px rgba(155, 28, 28, 0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(155, 28, 28, 0.5)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(155, 28, 28, 0.4)'; }}
          >
            Upgrade
          </button>
        </div>
      </div>

      {/* Onboarding Banner for Theme Extension */}
      {showOnboarding && (
        <div style={{
          background: 'linear-gradient(to right, #FFFBEB, #FEF3C7)',
          border: '1px solid #FCD34D',
          borderRadius: '16px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          zIndex: 1,
          boxShadow: '0 4px 6px -1px rgba(217, 119, 6, 0.1)',
          position: 'relative'
        }}>
          <button 
            onClick={() => setShowOnboarding(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#B45309',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem'
            }}
            aria-label="Dismiss"
          >
            ✕
          </button>
          <div style={{ color: '#D97706', marginTop: '4px' }}>
            <Sparkles size={24} />
          </div>
          <div style={{ flex: 1, paddingRight: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#92400E', margin: '0 0 0.5rem 0' }}>Almost there! Enable the app in your theme.</h3>
            <p style={{ color: '#B45309', margin: '0 0 1rem 0', lineHeight: '1.5' }}>
              To see your festive banners and magical snow effects on your storefront, you must enable the <b>Festive Store Decor App Embed</b> block in your Shopify Theme Editor.
            </p>
            <button 
              onClick={() => {
                const shop = new URLSearchParams(window.location.search).get('shop') || window.shopify?.config?.shop;
                if (shop) {
                  window.open(`https://${shop}/admin/themes/current/editor?context=apps`, '_blank');
                } else {
                  alert('Could not determine shop URL. Please go to Online Store > Themes > Customize > App Embeds manually.');
                }
              }}
              style={{
                background: '#D97706',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#B45309'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#D97706'}
            >
              Open Theme Editor
            </button>
          </div>
        </div>
      )}

      {/* Premium Hero Section */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '24px', 
        padding: '3rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
        zIndex: 1
      }}>
        
        {/* Subtle animated floating elements */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', animation: 'float 6s ease-in-out infinite' }}>
          <Sparkles size={32} color="rgba(155, 28, 28, 0.3)" />
        </div>
        <div style={{ position: 'absolute', bottom: '15%', right: '15%', animation: 'float 8s ease-in-out infinite reverse' }}>
          <Sparkles size={48} color="rgba(155, 28, 28, 0.2)" />
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, rgba(155, 28, 28, 0.1), rgba(155, 28, 28, 0.15))',
          padding: '1.25rem',
          borderRadius: '50%',
          marginBottom: '1.5rem',
          color: 'var(--primary)'
        }}>
          <Palette size={48} strokeWidth={1.5} />
        </div>
        
        <h3 style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
          Craft Your Store's Magic
        </h3>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.125rem)', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          Unleash the full potential of your storefront with breathtaking festive designs, seamless animations, and immersive decorations that captivate every visitor.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button 
            onClick={() => navigate('/app/templates')}
            style={{ 
              background: '#1E293B',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '999px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s',
              boxShadow: '0 10px 20px rgba(30, 41, 59, 0.2)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#1E293B'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <PlayCircle size={20} />
            Enter Studio
          </button>
        </div>
      </div>

      {/* Saved Drafts Section */}
      {drafts && drafts.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dark)' }}>
            <Clock size={24} color="var(--primary)" />
            Recent Drafts
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {drafts.map(draft => (
              <div key={draft.id} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>{draft.templateName}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Last edited: {new Date(draft.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div style={{ 
                  background: draft.bgColor, 
                  height: '80px', 
                  borderRadius: '8px', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  overflow: 'hidden',
                  padding: '1rem'
                }}>
                  <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{draft.textContent}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link 
                    to={`/app/editor?draftId=${draft.id}&template=${encodeURIComponent(draft.templateName)}`}
                    style={{
                      flex: 1,
                      background: '#F1F5F9',
                      color: '#334155',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: 'none',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'background 0.2s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#E2E8F0'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#F1F5F9'}
                  >
                    <Edit3 size={18} />
                    Resume Editing
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this template?')) {
                        const formData = new FormData();
                        formData.append('intent', 'delete');
                        formData.append('draftId', draft.id);
                        submit(formData, { method: 'post' });
                      }
                    }}
                    style={{
                      background: '#FEE2E2',
                      color: '#DC2626',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#FECACA'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#FEE2E2'}
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}} />
    </div>
  );
}

import React, { useState } from 'react';
import { Eye, X, CheckCircle, ExternalLink, Edit } from 'lucide-react';
import { useNavigate } from 'react-router';

const PreviewLink = ({ onClick }) => (
  <div onClick={onClick} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0.25rem', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.7rem', fontWeight: '600' }}>
    <Eye size={12} style={{ marginRight: '4px' }} /> Preview
  </div>
);

const LockedOverlay = ({ plan }) => (
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(2px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 'inherit', zIndex: 10 }}>
    <div style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #E2E8F0' }}>
      <span style={{ fontSize: '1.2rem' }}>🔒</span>
      <span style={{ fontWeight: 'bold', color: '#0F172A', fontSize: '0.8rem' }}>{plan} Required</span>
    </div>
  </div>
);

export default function TemplatesPreview({ onPublish, isPublishing, actionData }) {
  const navigate = useNavigate();
  const [previewTemplate, setPreviewTemplate] = useState(null);
  
  const handlePublishClick = (templateName) => {
    onPublish(templateName);
  };

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
      
      {actionData?.success && (
        <div style={{ backgroundColor: '#D1FAE5', border: '1px solid #34D399', color: '#065F46', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={20} />
            <span style={{ fontWeight: 'bold' }}>Success!</span> {actionData.publishedTemplate} has been published to your store.
          </div>
          <a href={"shopify://admin/themes/current/editor"} target="_blank" rel="noreferrer" style={{ backgroundColor: '#065F46', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Open Theme Editor <ExternalLink size={14} />
          </a>
        </div>
      )}
      
      {actionData?.error && (
        <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #F87171', color: '#991B1B', padding: '1rem', borderRadius: '8px' }}>
          <strong>Error:</strong> {actionData.error}
        </div>
      )}

      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Templates Gallery</h2>
      
      {/* Holiday Banners */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Holiday Banners</h3>
          <span style={{ color: 'var(--primary)', fontSize: '0.875rem', cursor: 'pointer', fontWeight: '600' }}>View All &gt;</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          
          <div style={{ position: 'relative', backgroundColor: '#064E3B', color: 'white', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #064E3B, #047857)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🎅</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Merry Christmas</h4>
                <p style={{ fontSize: '0.75rem', color: '#A7F3D0' }}>Up to 70% Off – Limited Time</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/editor?template=' + encodeURIComponent('Merry Christmas'))} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> Edit</button>
              <button onClick={() => setPreviewTemplate('Merry Christmas')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={isPublishing} onClick={() => handlePublishClick('Merry Christmas')} className="btn" style={{ backgroundColor: 'white', color: '#064E3B', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'pointer' }}>{isPublishing ? '...' : 'Publish'}</button>
            </div>
          </div>
          
          <div style={{ position: 'relative', backgroundColor: '#7C2D12', color: 'white', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #7C2D12, #B45309)' }}>
            <LockedOverlay plan="Starter Plan" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🪔</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#FCD34D' }}>Happy Diwali</h4>
                <p style={{ fontSize: '0.75rem', color: '#FDE68A' }}>Extra 20% Off On All Orders</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Happy Diwali')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={true} className="btn" style={{ backgroundColor: '#94A3B8', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'not-allowed', border: 'none' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#18181B', color: 'white', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #18181B, #3F3F46)' }}>
            <LockedOverlay plan="Starter Plan" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🖤</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Black Friday Sale</h4>
                <p style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Up to 80% OFF - Shop Now!</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Black Friday Sale')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={true} className="btn" style={{ backgroundColor: '#94A3B8', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'not-allowed', border: 'none' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#FCE7F3', color: '#BE185D', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #FBCFE8, #F9A8D4)' }}>
            <LockedOverlay plan="Pro Plan" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>💖</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Valentine's Day</h4>
                <p style={{ fontSize: '0.75rem', color: '#BE185D' }}>Buy 2 Get 1 Free - Limited Time</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} className="btn" style={{ backgroundColor: 'rgba(190,24,93,0.1)', color: '#BE185D', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Valentine')} className="btn" style={{ backgroundColor: 'rgba(190,24,93,0.1)', color: '#BE185D', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={true} className="btn" style={{ backgroundColor: '#94A3B8', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'not-allowed', border: 'none' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#0284C7', color: 'white', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #0284C7, #0369A1)' }}>
            <LockedOverlay plan="Pro Plan" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>💻</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Cyber Monday Sale</h4>
                <p style={{ fontSize: '0.75rem', color: '#E0F2FE' }}>The Biggest Tech Deals of the Year</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Cyber Monday')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={true} className="btn" style={{ backgroundColor: '#94A3B8', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'not-allowed', border: 'none' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#A21CAF', color: 'white', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #A21CAF, #86198F)' }}>
            <LockedOverlay plan="Enterprise Plan" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🦇</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Halloween Spooktacular</h4>
                <p style={{ fontSize: '0.75rem', color: '#FDF4FF' }}>Scary Good Discounts Inside</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Halloween Spooktacular')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={true} className="btn" style={{ backgroundColor: '#94A3B8', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'not-allowed', border: 'none' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#10B981', color: 'white', padding: '0.75rem 1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', backgroundImage: 'linear-gradient(to right, #10B981, #059669)' }}>
            <LockedOverlay plan="Enterprise Plan" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🌸</span>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Spring Collection</h4>
                <p style={{ fontSize: '0.75rem', color: '#D1FAE5' }}>Refresh Your Wardrobe Today</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit size={14}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Spring Collection')} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.8rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Eye size={14}/> Preview</button>
              <button disabled={true} className="btn" style={{ backgroundColor: '#94A3B8', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1rem', cursor: 'not-allowed', border: 'none' }}>🔒 Publish</button>
            </div>
          </div>

        </div>
      </div>

      {/* Popups */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Popups</h3>
          <span style={{ color: 'var(--primary)', fontSize: '0.875rem', cursor: 'pointer', fontWeight: '600' }}>View All &gt;</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          
          <div style={{ position: 'relative', backgroundColor: '#064E3B', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Christmas Special Offer</p>
            <span style={{ fontSize: '2rem', margin: '0.5rem 0' }}>🎅</span>
            <input type="text" placeholder="Enter email" style={{ width: '100%', padding: '0.3rem', fontSize: '0.6rem', borderRadius: '4px', border: 'none', marginBottom: '0.5rem' }} />
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/editor?template=' + encodeURIComponent('Christmas Popup'))} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> Edit</button>
              <button onClick={() => setPreviewTemplate('Christmas Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={isPublishing} onClick={() => handlePublishClick('Christmas Popup')} style={{ backgroundColor: '#DC2626', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Publish</button>
            </div>
          </div>
          
          <div style={{ position: 'relative', backgroundColor: '#7F1D1D', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Starter Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#FEF08A' }}>Spin & Win!</p>
            <span style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>🎡</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Spin & Win Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1rem', color: '#1E293B', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Starter Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#DC2626' }}>Wait!</p>
            <p style={{ fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Get 15% OFF Before You Go</p>
            <span style={{ fontSize: '2rem', margin: '0.5rem 0' }}>🎁</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: '#E2E8F0', color: '#475569', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Exit Intent Popup')} style={{ backgroundColor: '#E2E8F0', color: '#475569', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#1E3A8A', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Pro Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#FDE047' }}>New Year Sale</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '0.25rem 0' }}>Flat 30% OFF</p>
            <span style={{ fontSize: '1.5rem', margin: '0.2rem 0' }}>🎆</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('New Year Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#EA580C', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Pro Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Flash Sale Popup</p>
            <span style={{ fontSize: '2rem', margin: '0.5rem 0' }}>⚡</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Flash Sale Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#0D9488', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Enterprise Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Welcome Discount</p>
            <span style={{ fontSize: '2rem', margin: '0.5rem 0' }}>👋</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Welcome Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#6366F1', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Enterprise Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Free Shipping</p>
            <span style={{ fontSize: '2rem', margin: '0.5rem 0' }}>🚚</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Free Shipping Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

          <div style={{ position: 'relative', backgroundColor: '#D946EF', borderRadius: '8px', padding: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LockedOverlay plan="Enterprise Plan" />
            <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem' }}>❌</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Newsletter Signup</p>
            <span style={{ fontSize: '2rem', margin: '0.5rem 0' }}>✉️</span>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: '0.5rem', position: 'relative', zIndex: 20 }}>
              <button onClick={() => navigate('/app/pricing')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Edit size={12}/> 🔒 Edit</button>
              <button onClick={() => setPreviewTemplate('Newsletter Popup')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', border: 'none', cursor: 'pointer' }}><Eye size={12}/> Preview</button>
              <button disabled={true} style={{ backgroundColor: '#94A3B8', color: 'white', padding: '0.3rem', flex: 1, borderRadius: '4px', fontSize: '0.6rem', fontWeight: 'bold', border: 'none', cursor: 'not-allowed' }}>🔒 Publish</button>
            </div>
          </div>

        </div>
      </div>


      
      {previewTemplate && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '2rem'
        }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => setPreviewTemplate(null)}
              style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: 'white', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Close <X size={20} />
            </button>
            
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '16px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {(() => {
                const name = previewTemplate;
                if (name === 'Merry Christmas') return (
                  <div style={{ backgroundColor: '#064E3B', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #064E3B, #047857)' }}>
                    <span style={{ fontSize: '4rem' }}>🎅</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Merry Christmas</h2>
                      <p style={{ fontSize: '1.2rem', color: '#A7F3D0', margin: 0 }}>Up to 70% Off – Limited Time</p>
                    </div>
                  </div>
                );
                if (name === 'Happy Diwali') return (
                  <div style={{ backgroundColor: '#7C2D12', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #7C2D12, #B45309)' }}>
                    <span style={{ fontSize: '4rem' }}>🪔</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FCD34D', margin: 0 }}>Happy Diwali</h2>
                      <p style={{ fontSize: '1.2rem', color: '#FDE68A', margin: 0 }}>Extra 20% Off On All Orders</p>
                    </div>
                  </div>
                );
                if (name === 'Black Friday Sale') return (
                  <div style={{ backgroundColor: '#18181B', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #18181B, #3F3F46)' }}>
                    <span style={{ fontSize: '4rem' }}>🖤</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Black Friday Sale</h2>
                      <p style={{ fontSize: '1.2rem', color: '#A1A1AA', margin: 0 }}>Up to 80% OFF - Shop Now!</p>
                    </div>
                  </div>
                );
                if (name === 'Valentine') return (
                  <div style={{ backgroundColor: '#FCE7F3', color: '#BE185D', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #FBCFE8, #F9A8D4)' }}>
                    <span style={{ fontSize: '4rem' }}>💖</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Valentine's Day</h2>
                      <p style={{ fontSize: '1.2rem', margin: 0 }}>Buy 2 Get 1 Free - Limited Time</p>
                    </div>
                  </div>
                );
                if (name === 'Cyber Monday') return (
                  <div style={{ backgroundColor: '#0284C7', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #0284C7, #0369A1)' }}>
                    <span style={{ fontSize: '4rem' }}>💻</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Cyber Monday Sale</h2>
                      <p style={{ fontSize: '1.2rem', margin: 0, color: '#E0F2FE' }}>The Biggest Tech Deals of the Year</p>
                    </div>
                  </div>
                );
                if (name === 'Halloween Spooktacular') return (
                  <div style={{ backgroundColor: '#A21CAF', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #A21CAF, #86198F)' }}>
                    <span style={{ fontSize: '4rem' }}>🦇</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Halloween Spooktacular</h2>
                      <p style={{ fontSize: '1.2rem', margin: 0, color: '#FDF4FF' }}>Scary Good Discounts Inside</p>
                    </div>
                  </div>
                );
                if (name === 'Spring Collection') return (
                  <div style={{ backgroundColor: '#10B981', color: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%', marginBottom: '2rem', backgroundImage: 'linear-gradient(to right, #10B981, #059669)' }}>
                    <span style={{ fontSize: '4rem' }}>🌸</span>
                    <div style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Spring Collection</h2>
                      <p style={{ fontSize: '1.2rem', margin: 0, color: '#D1FAE5' }}>Refresh Your Wardrobe Today</p>
                    </div>
                  </div>
                );

                if (name?.includes('Popup')) return (
                  <div style={{ width: '350px', margin: '0 auto 2rem', backgroundColor: name.includes('Christmas') ? '#064E3B' : name.includes('Spin') ? '#7F1D1D' : name.includes('Exit') ? '#F8FAFC' : name.includes('Flash') ? '#EA580C' : name.includes('Welcome') ? '#0D9488' : name.includes('Free Shipping') ? '#6366F1' : name.includes('Newsletter') ? '#D946EF' : '#1E3A8A', color: name.includes('Exit') ? '#1E293B' : 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center', border: name.includes('Exit') ? '1px solid #E2E8F0' : 'none', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: name.includes('Exit') ? '#DC2626' : 'inherit' }}>{name}</h3>
                    <span style={{ fontSize: '4rem' }}>{name.includes('Christmas') ? '🎅' : name.includes('Spin') ? '🎡' : name.includes('Exit') ? '🎁' : name.includes('Flash') ? '⚡' : name.includes('Welcome') ? '👋' : name.includes('Free Shipping') ? '🚚' : name.includes('Newsletter') ? '✉️' : '🎆'}</span>
                    <p style={{ margin: '1rem 0' }}>{name.includes('Exit') ? 'Get 15% OFF Before You Go' : 'Subscribe for exclusive deals!'}</p>
                    <div style={{ marginTop: '1rem' }}>
                      {(!name.includes('Flash') && !name.includes('Free Shipping')) && (
                        <input type="email" placeholder="Enter email" style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                      )}
                      <button style={{ width: '100%', padding: '0.75rem', backgroundColor: name.includes('Exit') ? '#DC2626' : 'rgba(0,0,0,0.3)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem' }}>
                        {name.includes('Flash') ? 'Shop Now' : name.includes('Free Shipping') ? 'Claim Offer' : 'Subscribe'}
                      </button>
                    </div>
                  </div>
                );
                return (
                  <div style={{ backgroundColor: '#F1F5F9', padding: '3rem', borderRadius: '12px', width: '100%', marginBottom: '2rem', border: '2px dashed #CBD5E1' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 1rem 0', color: '#0F172A' }}>{name}</h2>
                    <p style={{ color: '#64748B', fontSize: '1.2rem', margin: 0 }}>This is a full preview of the {name} layout.</p>
                  </div>
                );
              })()}

              {(() => {
                const getRequiredPlan = (name) => {
                  if (name === 'Merry Christmas' || name === 'Christmas Popup') return null;
                  if (['Happy Diwali', 'Spin & Win Popup', 'Exit Intent Popup'].includes(name)) return 'Starter Plan';
                  if (['Valentine', 'Cyber Monday', 'New Year Popup', 'Flash Sale Popup'].includes(name)) return 'Pro Plan';
                  return 'Enterprise Plan';
                };
                const requiredPlan = getRequiredPlan(previewTemplate);
                return (
                  <button 
                    disabled={!!requiredPlan || isPublishing}
                    onClick={() => { setPreviewTemplate(null); handlePublishClick(previewTemplate); }}
                    style={{ 
                      backgroundColor: requiredPlan ? '#94A3B8' : 'var(--primary)', 
                      color: 'white', 
                      padding: '0.75rem 2.5rem', 
                      borderRadius: '8px', 
                      fontSize: '1.1rem', 
                      fontWeight: 'bold', 
                      border: 'none', 
                      cursor: requiredPlan ? 'not-allowed' : 'pointer', 
                      display: 'inline-block' 
                    }}
                  >
                    {isPublishing ? '...' : requiredPlan ? `🔒 Publish (${requiredPlan} Required)` : 'Publish Template'}
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

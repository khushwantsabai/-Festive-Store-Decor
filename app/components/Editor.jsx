import React from 'react';
import { useSearchParams } from 'react-router';
import { Monitor, Tablet, Smartphone, Undo2, Redo2, LayoutTemplate, Image as ImageIcon, Type, MousePointerClick, Clock, Sparkles, Code, SplitSquareHorizontal, MessageSquareWarning } from 'lucide-react';

export default function Editor() {
  const [searchParams] = useSearchParams();
  const templateName = searchParams.get('template') || 'Merry Christmas';

  const isPopup = templateName.includes('Popup');

  // Banner Defaults
  let bannerBg = '#B91C1C';
  let bannerText = '🎄 Christmas Sale is Live! Up to 70% OFF';
  let heroBg = '#064E3B';
  let title = 'Merry Christmas';
  let titleColor = '#FCD34D';
  let subtitle = 'Limited Time Offer';
  let buttonBg = '#FCD34D';
  let buttonColor = '#064E3B';

  // Popup Defaults
  let popupBg = '#064E3B';
  let popupColor = 'white';
  let popupTitle = 'Christmas Special Offer';
  let popupIcon = '🎅';
  let popupSubtitle = 'Subscribe for exclusive deals!';

  if (templateName === 'Happy Diwali') {
    bannerBg = '#B45309'; bannerText = '🪔 Happy Diwali! Extra 20% Off On All Orders';
    heroBg = '#7C2D12'; title = 'Happy Diwali'; titleColor = '#FCD34D'; subtitle = 'Extra 20% Off On All Orders'; buttonBg = '#FCD34D'; buttonColor = '#7C2D12';
  } else if (templateName === 'Black Friday Sale') {
    bannerBg = '#3F3F46'; bannerText = '🖤 Black Friday Sale is Live! Up to 80% OFF';
    heroBg = '#18181B'; title = 'Black Friday Sale'; titleColor = '#FFFFFF'; subtitle = 'Up to 80% OFF - Shop Now!'; buttonBg = '#FFFFFF'; buttonColor = '#18181B';
  } else if (templateName === 'Spring Collection') {
    bannerBg = '#059669'; bannerText = '🌸 Spring Collection is Here! Refresh Your Wardrobe Today';
    heroBg = '#10B981'; title = 'Spring Collection'; titleColor = '#FFFFFF'; subtitle = 'Refresh Your Wardrobe Today'; buttonBg = '#FFFFFF'; buttonColor = '#10B981';
  } else if (templateName === 'Valentine') {
    bannerBg = '#BE185D'; bannerText = "💖 Valentine's Day! Buy 2 Get 1 Free";
    heroBg = '#FCE7F3'; title = "Valentine's Day"; titleColor = '#BE185D'; subtitle = 'Buy 2 Get 1 Free - Limited Time'; buttonBg = '#BE185D'; buttonColor = 'white';
  } else if (templateName === 'Cyber Monday') {
    bannerBg = '#0369A1'; bannerText = '💻 Cyber Monday! Biggest Tech Deals';
    heroBg = '#0284C7'; title = 'Cyber Monday Sale'; titleColor = 'white'; subtitle = 'The Biggest Tech Deals of the Year'; buttonBg = 'white'; buttonColor = '#0284C7';
  } else if (templateName === 'Halloween Spooktacular') {
    bannerBg = '#86198F'; bannerText = '🦇 Halloween Spooktacular! Scary Good Discounts';
    heroBg = '#A21CAF'; title = 'Halloween Spooktacular'; titleColor = 'white'; subtitle = 'Scary Good Discounts Inside'; buttonBg = 'black'; buttonColor = 'white';
  }

  if (templateName === 'Spin & Win Popup') {
    popupBg = '#7F1D1D'; popupTitle = 'Spin & Win!'; popupIcon = '🎡';
  } else if (templateName === 'Exit Intent Popup') {
    popupBg = '#F8FAFC'; popupColor = '#1E293B'; popupTitle = 'Wait!'; popupIcon = '🎁'; popupSubtitle = 'Get 15% OFF Before You Go';
  } else if (templateName === 'New Year Popup') {
    popupBg = '#1E3A8A'; popupTitle = 'New Year Sale'; popupIcon = '🎆'; popupSubtitle = 'Flat 30% OFF';
  } else if (templateName === 'Flash Sale Popup') {
    popupBg = '#EA580C'; popupTitle = 'Flash Sale Popup'; popupIcon = '⚡';
  } else if (templateName === 'Welcome Popup') {
    popupBg = '#0D9488'; popupTitle = 'Welcome Discount'; popupIcon = '👋';
  } else if (templateName === 'Free Shipping Popup') {
    popupBg = '#6366F1'; popupTitle = 'Free Shipping'; popupIcon = '🚚';
  } else if (templateName === 'Newsletter Popup') {
    popupBg = '#D946EF'; popupTitle = 'Newsletter Signup'; popupIcon = '✉️';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Drag & Drop Customize Editor {templateName !== 'Merry Christmas' ? `- ${templateName}` : ''}</h2>
      
      <div className="card" style={{ padding: '0', display: 'flex', overflow: 'hidden', height: 'auto', minHeight: '600px', flexWrap: 'wrap' }}>
        
        {/* Center Canvas Panel */}
        <div style={{ flex: '1 1 60%', minWidth: '300px', backgroundColor: '#F1F5F9', display: 'flex', flexDirection: 'column' }}>
          {/* Top Toolbar */}
          <div style={{ padding: '0.75rem 1.5rem', backgroundColor: 'white', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <Monitor size={18} color="var(--primary)" /> <Tablet size={18} /> <Smartphone size={18} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <Undo2 size={18} /> <Redo2 size={18} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Preview</button>
              <button className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Save & Continue</button>
            </div>
          </div>
          
          {/* Canvas Area */}
          <div style={{ padding: '2rem', flex: 1, overflowY: 'auto', position: 'relative' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', overflow: 'hidden', minHeight: '400px', filter: isPopup ? 'blur(2px)' : 'none' }}>
              <div style={{ backgroundColor: '#1E293B', color: 'white', padding: '0.5rem', textAlign: 'center', fontSize: '0.875rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                Store Announcement Bar <button style={{ backgroundColor: 'white', color: '#1E293B', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Shop Now</button>
              </div>
              <div style={{ padding: '1rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your Store</h4>
                <ul style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <li>Home</li><li>Shop</li><li>Collection</li><li>About</li><li>Contact</li>
                </ul>
              </div>
              
              {!isPopup && (
                <>
                  <div style={{ backgroundColor: heroBg, height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: titleColor, position: 'relative' }}>
                     <h2 style={{ fontSize: '2.5rem', fontWeight: '300' }}>{title}</h2>
                     <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>{subtitle.includes('OFF') ? subtitle.split(' - ')[0] : 'UP TO 50% OFF'}</h1>
                     <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: titleColor === 'white' ? 'rgba(255,255,255,0.8)' : 'inherit' }}>{subtitle.includes('OFF') ? 'Limited Time Offer' : subtitle}</p>
                     <button className="btn" style={{ backgroundColor: buttonBg, color: buttonColor, fontSize: '1.125rem' }}>Shop Now</button>
                  </div>
                  
                  <div style={{ backgroundColor: '#1E293B', color: 'white', padding: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                    <div><span style={{ fontSize: '2rem', fontWeight: 'bold' }}>05</span><br/><span style={{ fontSize: '0.75rem' }}>Days</span></div> :
                    <div><span style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</span><br/><span style={{ fontSize: '0.75rem' }}>Hours</span></div> :
                    <div><span style={{ fontSize: '2rem', fontWeight: 'bold' }}>45</span><br/><span style={{ fontSize: '0.75rem' }}>Minutes</span></div> :
                    <div><span style={{ fontSize: '2rem', fontWeight: 'bold' }}>30</span><br/><span style={{ fontSize: '0.75rem' }}>Seconds</span></div>
                  </div>
                </>
              )}
            </div>

            {/* Popup Overlay Render */}
            {isPopup && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                <div style={{ width: '350px', backgroundColor: popupBg, color: popupColor, padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', border: popupBg === '#F8FAFC' ? '1px solid #E2E8F0' : 'none', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>❌</span>
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: popupBg === '#F8FAFC' ? '#DC2626' : 'inherit' }}>{popupTitle}</h3>
                  <span style={{ fontSize: '4rem' }}>{popupIcon}</span>
                  <p style={{ margin: '1rem 0' }}>{popupSubtitle}</p>
                  <div style={{ marginTop: '1rem' }}>
                    {(!templateName.includes('Flash') && !templateName.includes('Free Shipping')) && (
                      <input type="email" placeholder="Enter email" style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                    )}
                    <button style={{ width: '100%', padding: '0.75rem', backgroundColor: popupBg === '#F8FAFC' ? '#DC2626' : 'rgba(0,0,0,0.3)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                      {templateName.includes('Flash') ? 'Shop Now' : templateName.includes('Free Shipping') ? 'Claim Offer' : 'Subscribe'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Settings Panel */}
        <div style={{ minWidth: '250px', flex: '1 1 250px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>Element Settings</h3>
          </div>
          <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-muted)', marginBottom: '1rem' }}>{isPopup ? 'Popup Content' : 'Banner'}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Text Content</label>
                <textarea style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E2E8F0', resize: 'vertical' }} rows="3" value={isPopup ? popupSubtitle : subtitle} readOnly />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Button Text</label>
                <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} defaultValue={isPopup ? (templateName.includes('Flash') ? 'Shop Now' : 'Subscribe') : 'Shop Now'} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Background Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', border: '1px solid #E2E8F0', borderRadius: '6px' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: isPopup ? popupBg : heroBg, borderRadius: '4px', border: '1px solid #E2E8F0' }}></div>
                  <span>{isPopup ? popupBg : heroBg}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)' }}>Show Close Button</span>
                <div style={{ width: '36px', height: '20px', backgroundColor: 'var(--success)', borderRadius: '999px', position: 'relative' }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Animation</label>
                <select style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <option>{isPopup ? 'Fade In' : 'Slide'}</option>
                  <option>Zoom</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

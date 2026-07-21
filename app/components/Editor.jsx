import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Monitor, Smartphone, Tablet, Undo2, Redo2, LayoutTemplate, Image as ImageIcon, Type, MousePointerClick, Clock, Sparkles, Code, SplitSquareHorizontal, MessageSquareWarning } from 'lucide-react';

export default function Editor({ submit, actionData, isSubmitting, loaderData }) {
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

  const draftData = loaderData?.draftData;

  const defaultTitleText = draftData?.titleText ?? (isPopup ? popupTitle : title);
  const defaultTextContent = draftData?.textContent ?? (isPopup ? popupSubtitle : subtitle);
  const defaultButtonText = draftData?.buttonText ?? (isPopup ? (templateName.includes('Flash') ? 'Shop Now' : 'Subscribe') : 'Shop Now');
  const defaultBgColor = draftData?.bgColor ?? (isPopup ? popupBg : heroBg);
  const defaultBtnBgColor = draftData?.btnBgColor ?? (isPopup ? (defaultBgColor === '#F8FAFC' ? '#DC2626' : 'rgba(0,0,0,0.3)') : 'rgba(255,255,255,0.2)');
  const defaultTextColor = draftData?.textColor ?? (isPopup ? 'inherit' : (templateName === 'Merry Christmas' ? '#A7F3D0' : templateName === 'Happy Diwali' ? '#FDE68A' : templateName === 'Black Friday Sale' ? '#A1A1AA' : templateName === 'Valentine' ? '#BE185D' : templateName === 'Cyber Monday' ? '#E0F2FE' : templateName === 'Halloween Spooktacular' ? '#FDF4FF' : templateName === 'Spring Collection' ? '#D1FAE5' : 'inherit'));
  const defaultShowCloseButton = draftData?.showCloseButton ?? true;

  const [titleText, setTitleText] = useState(defaultTitleText);
  const [textContent, setTextContent] = useState(defaultTextContent);
  const [buttonText, setButtonText] = useState(defaultButtonText);
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [btnBgColor, setBtnBgColor] = useState(defaultBtnBgColor);
  const [textColor, setTextColor] = useState(defaultTextColor);
  const [showCloseButton, setShowCloseButton] = useState(defaultShowCloseButton);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentTemplate, setCurrentTemplate] = useState(templateName);

  if (templateName !== currentTemplate) {
    setCurrentTemplate(templateName);
    setTitleText(defaultTitleText);
    setTextContent(defaultTextContent);
    setButtonText(defaultButtonText);
    setBgColor(defaultBgColor);
    setBtnBgColor(defaultBtnBgColor);
    setTextColor(defaultTextColor);
    setHistory([{ titleText: defaultTitleText, textContent: defaultTextContent, buttonText: defaultButtonText, bgColor: defaultBgColor, btnBgColor: defaultBtnBgColor, textColor: defaultTextColor, showCloseButton: true }]);
    setHistoryIndex(0);
  }

  useEffect(() => {
    if (history.length === 0) {
      setHistory([{ titleText: defaultTitleText, textContent: defaultTextContent, buttonText: defaultButtonText, bgColor: defaultBgColor, btnBgColor: defaultBtnBgColor, textColor: defaultTextColor, showCloseButton: true }]);
      setHistoryIndex(0);
    }
  }, []);

  const updateState = (updates) => {
    const newState = { titleText, textContent, buttonText, bgColor, btnBgColor, textColor, showCloseButton, ...updates };
    if (updates.titleText !== undefined) setTitleText(updates.titleText);
    if (updates.textContent !== undefined) setTextContent(updates.textContent);
    if (updates.buttonText !== undefined) setButtonText(updates.buttonText);
    if (updates.bgColor !== undefined) setBgColor(updates.bgColor);
    if (updates.btnBgColor !== undefined) setBtnBgColor(updates.btnBgColor);
    if (updates.textColor !== undefined) setTextColor(updates.textColor);
    if (updates.showCloseButton !== undefined) setShowCloseButton(updates.showCloseButton);

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newState);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevState = history[historyIndex - 1];
      setTitleText(prevState.titleText);
      setTextContent(prevState.textContent);
      setButtonText(prevState.buttonText);
      setBgColor(prevState.bgColor);
      setBtnBgColor(prevState.btnBgColor);
      setTextColor(prevState.textColor);
      setShowCloseButton(prevState.showCloseButton);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setTitleText(nextState.titleText);
      setTextContent(nextState.textContent);
      setButtonText(nextState.buttonText);
      setBgColor(nextState.bgColor);
      setBtnBgColor(nextState.btnBgColor);
      setTextColor(nextState.textColor);
      setShowCloseButton(nextState.showCloseButton);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const [viewMode, setViewMode] = useState('desktop');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>Customize Editor {templateName !== 'Merry Christmas' ? `- ${templateName}` : ''}</h2>
      
      {actionData?.success && (
        <div style={{ backgroundColor: '#D1FAE5', border: '1px solid #34D399', color: '#065F46', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><strong>Success!</strong> {actionData.message}</div>
        </div>
      )}
      
      {actionData?.error && (
        <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #F87171', color: '#991B1B', padding: '1rem', borderRadius: '8px' }}>
          <strong>Error:</strong> {actionData.error}
        </div>
      )}
      
      <div className="card" style={{ padding: '0', display: 'flex', overflow: 'hidden', height: 'auto', minHeight: '600px', flexWrap: 'wrap' }}>
        
        {/* Center Canvas Panel */}
        <div style={{ flex: '1 1 60%', minWidth: '300px', backgroundColor: '#F1F5F9', display: 'flex', flexDirection: 'column' }}>
          {/* Top Toolbar */}
          <div style={{ padding: '0.75rem 1.5rem', backgroundColor: 'white', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <Monitor size={18} color={viewMode === 'desktop' ? 'var(--primary)' : 'inherit'} style={{ cursor: 'pointer' }} onClick={() => setViewMode('desktop')} title="Desktop View" /> 
              <Smartphone size={18} color={viewMode === 'mobile' ? 'var(--primary)' : 'inherit'} style={{ cursor: 'pointer' }} onClick={() => setViewMode('mobile')} title="Mobile Browser View" />
              <Tablet size={18} color={viewMode === 'app' ? 'var(--primary)' : 'inherit'} style={{ cursor: 'pointer' }} onClick={() => setViewMode('app')} title="Mobile App View" />
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <Undo2 size={18} onClick={handleUndo} style={{ cursor: historyIndex > 0 ? 'pointer' : 'default', opacity: historyIndex > 0 ? 1 : 0.5 }} /> 
              <Redo2 size={18} onClick={handleRedo} style={{ cursor: historyIndex < history.length - 1 ? 'pointer' : 'default', opacity: historyIndex < history.length - 1 ? 1 : 0.5 }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                disabled={isSubmitting}
                onClick={() => submit({ templateName, actionType: 'draft', titleText, textContent, buttonText, bgColor, btnBgColor, textColor, showCloseButton, draftId: draftData?.id || '' }, { method: 'post' })}
                className="btn btn-outline" 
                style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
              >
                Save Draft
              </button>
              <button 
                disabled={isSubmitting}
                onClick={() => submit({ templateName, actionType: 'publish', titleText, textContent, buttonText, bgColor, btnBgColor, textColor, showCloseButton, draftId: draftData?.id || '' }, { method: 'post' })}
                className="btn btn-primary" 
                style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
              >
                {isSubmitting ? 'Processing...' : 'Publish'}
              </button>
            </div>
          </div>
          
          {/* Canvas Area */}
          <div style={{ padding: '2rem', flex: 1, overflowY: 'auto', position: 'relative', display: 'flex', justifyContent: 'center', backgroundColor: '#F1F5F9' }}>
            <div style={{ 
              width: '100%', 
              maxWidth: (viewMode === 'mobile' || viewMode === 'app') ? '375px' : '100%', 
              transition: 'all 0.3s ease', 
              backgroundColor: 'white', 
              borderRadius: (viewMode === 'mobile' || viewMode === 'app') ? '32px' : '8px', 
              border: (viewMode === 'mobile' || viewMode === 'app') ? '12px solid #1E293B' : 'none',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', 
              overflow: 'hidden', 
              minHeight: '400px', 
              filter: isPopup ? 'blur(2px)' : 'none' 
            }}>
              {/* Dummy store headers removed as requested */}
              
              {!isPopup && (
                <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ 
                    backgroundColor: bgColor, 
                    color: titleColor, 
                    padding: 'clamp(1rem, 5vw, 2rem)', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap',
                    flexDirection: viewMode === 'desktop' ? 'row' : 'column',
                    textAlign: viewMode === 'desktop' ? 'left' : 'center',
                    gap: viewMode === 'desktop' ? '2rem' : '1rem', 
                    width: '100%', 
                    backgroundImage: bgColor === heroBg ? `linear-gradient(to right, ${heroBg}, ${heroBg === '#064E3B' ? '#047857' : heroBg === '#7C2D12' ? '#B45309' : heroBg === '#18181B' ? '#3F3F46' : heroBg === '#FCE7F3' ? '#F9A8D4' : heroBg === '#0284C7' ? '#0369A1' : heroBg === '#A21CAF' ? '#86198F' : '#059669'})` : 'none' 
                  }}>
                    <span style={{ fontSize: '4rem', lineHeight: 1 }}>
                      {templateName === 'Merry Christmas' ? '🎅' : 
                       templateName === 'Happy Diwali' ? '🪔' : 
                       templateName === 'Black Friday Sale' ? '🖤' : 
                       templateName === 'Valentine' ? '💖' : 
                       templateName === 'Cyber Monday' ? '💻' : 
                       templateName === 'Halloween Spooktacular' ? '🦇' : 
                       templateName === 'Spring Collection' ? '🌸' : '✨'}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: viewMode === 'desktop' ? 'flex-start' : 'center', gap: '0.5rem' }}>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', fontWeight: 'bold', margin: 0, color: titleColor }}>{titleText}</h2>
                      <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', color: textColor, margin: 0, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{textContent}</p>
                      <button style={{ backgroundColor: btnBgColor, color: titleColor, border: `1px solid ${titleColor}`, padding: '0.4rem 1rem', borderRadius: '4px', fontWeight: 'bold', marginTop: '0.5rem', cursor: 'pointer', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{buttonText}</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Popup Overlay Render */}
            {isPopup && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                <div style={{ width: '350px', backgroundColor: bgColor, color: popupColor, padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', border: bgColor === '#F8FAFC' ? '1px solid #E2E8F0' : 'none', position: 'relative' }}>
                  {showCloseButton && <span style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>❌</span>}
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: bgColor === '#F8FAFC' ? '#DC2626' : 'inherit' }}>{titleText}</h3>
                  <span style={{ fontSize: '4rem' }}>{popupIcon}</span>
                  <p style={{ margin: '1rem 0', color: textColor, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{textContent}</p>
                  <div style={{ marginTop: '1rem' }}>
                    {(!templateName.includes('Flash') && !templateName.includes('Free Shipping')) && (
                      <input type="email" placeholder="Enter email" style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                    )}
                    <button style={{ width: '100%', padding: '0.75rem', backgroundColor: btnBgColor, color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                      {buttonText}
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
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Title Text</label>
                <input 
                  onChange={(e) => updateState({ titleText: e.target.value })}
                  type="text" 
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} 
                  value={titleText} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Text Content</label>
                <textarea 
                  onChange={(e) => updateState({ textContent: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E2E8F0', resize: 'vertical' }} 
                  rows="3" 
                  value={textContent} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Button Text</label>
                <input 
                  onChange={(e) => updateState({ buttonText: e.target.value })}
                  type="text" 
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} 
                  value={buttonText} 
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Background Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', border: '1px solid #E2E8F0', borderRadius: '6px' }}>
                  <input 
                    type="color" 
                    onChange={(e) => updateState({ bgColor: e.target.value })}
                    style={{ width: '24px', height: '24px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'transparent' }} 
                    value={bgColor} 
                  />
                  <span>{bgColor.toUpperCase()}</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Button Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', border: '1px solid #E2E8F0', borderRadius: '6px' }}>
                  <input 
                    type="color" 
                    onChange={(e) => updateState({ btnBgColor: e.target.value })}
                    style={{ width: '24px', height: '24px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'transparent' }} 
                    value={btnBgColor.startsWith('rgba') ? '#ffffff' : btnBgColor} 
                  />
                  <span>{btnBgColor.startsWith('rgba') ? 'DEFAULT' : btnBgColor.toUpperCase()}</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Text Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', border: '1px solid #E2E8F0', borderRadius: '6px' }}>
                  <input 
                    type="color" 
                    onChange={(e) => updateState({ textColor: e.target.value })}
                    style={{ width: '24px', height: '24px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'transparent' }} 
                    value={textColor === 'inherit' ? '#000000' : textColor} 
                  />
                  <span>{textColor === 'inherit' ? 'DEFAULT' : textColor.toUpperCase()}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)' }}>Show Close Button</span>
                <div 
                  onClick={() => updateState({ showCloseButton: !showCloseButton })}
                  style={{ width: '36px', height: '20px', backgroundColor: showCloseButton ? 'var(--success)' : '#CBD5E1', borderRadius: '999px', position: 'relative', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  <div style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: showCloseButton ? '2px' : 'auto', left: showCloseButton ? 'auto' : '2px', top: '2px', transition: 'all 0.2s' }}></div>
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

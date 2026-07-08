import React, { useEffect } from 'react';
import { Check, Star, Zap, Shield, Crown, X, AlertCircle } from 'lucide-react';
import { useSubmit, useActionData } from 'react-router';

export default function Pricing({ isSubmitting, submittingPlan, activePlan = 'Free' }) {
  const submit = useSubmit();
  const actionData = useActionData();

  const handleUpgrade = (plan) => {
    submit({ plan }, { method: 'post' });
  };



  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem 0' }}>
      {actionData?.billingError && (
        <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444', color: '#B91C1C', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '600px' }}>
          <AlertCircle size={24} />
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.9rem', fontFamily: 'inherit' }}>
            {actionData.billingError}
          </pre>
        </div>
      )}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Simple, transparent pricing</h2>
        <p style={{ color: '#64748B', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Choose the perfect plan for your store. Upgrade or downgrade at any time to match your business needs.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
        
        {/* Free Plan */}
        <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748B' }}>
            <Star size={20} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: '#0F172A' }}>Free</h3>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>Basic decorations and templates to get your store into the festive spirit.</p>
          <div style={{ margin: '0 0 2rem 0' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A' }}>$0</span> <span style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: '500' }}>/ month</span>
          </div>
          <button 
            disabled={isSubmitting || activePlan === 'Free'}
            onClick={() => handleUpgrade('Free')}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: '#F1F5F9', color: '#0F172A', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', marginBottom: '2rem', cursor: (isSubmitting || activePlan === 'Free') ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s', opacity: (isSubmitting || activePlan === 'Free') ? 0.7 : 1 }} 
            onMouseEnter={(e) => { if(!isSubmitting && activePlan !== 'Free') e.target.style.backgroundColor = '#E2E8F0'; }} 
            onMouseLeave={(e) => { if(!isSubmitting && activePlan !== 'Free') e.target.style.backgroundColor = '#F1F5F9'; }}>
            {activePlan === 'Free' ? 'Current Plan' : isSubmitting && submittingPlan === 'Free' ? 'Processing...' : 'Downgrade to Free'}
          </button>
          
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', flex: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What's included</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#475569', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} /> 1 Banner Template</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} /> 1 Popup Template</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} /> Basic Customization</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#94A3B8' }}><X size={18} color="#94A3B8" style={{ flexShrink: 0, marginTop: '2px' }} /> Remove App Branding</li>
            </ul>
          </div>
        </div>

        {/* Starter Plan */}
        <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <Zap size={20} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: '#0F172A' }}>Starter</h3>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>Unlock more templates, effects, and campaigns to boost seasonal sales.</p>
          <div style={{ margin: '0 0 2rem 0' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A' }}>$49</span> <span style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: '500' }}>/ month</span>
          </div>
          <button 
            disabled={isSubmitting || activePlan === 'Starter Plan'}
            onClick={() => handleUpgrade('Starter Plan')}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'white', color: '#0EA5E9', border: '2px solid #0EA5E9', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', marginBottom: '2rem', cursor: (isSubmitting || activePlan === 'Starter Plan') ? 'not-allowed' : 'pointer', transition: 'all 0.2s', opacity: (isSubmitting || activePlan === 'Starter Plan') ? 0.7 : 1 }} 
            onMouseEnter={(e) => { if(!isSubmitting && activePlan !== 'Starter Plan') e.target.style.backgroundColor = '#F0F9FF'; }} 
            onMouseLeave={(e) => { if(!isSubmitting && activePlan !== 'Starter Plan') e.target.style.backgroundColor = 'white'; }}
          >
            {activePlan === 'Starter Plan' ? 'Current Plan' : isSubmitting && submittingPlan === 'Starter Plan' ? 'Processing...' : 'Upgrade to Starter'}
          </button>
          
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', flex: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Everything in Free, plus:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#475569', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '2px' }} /> 2 Banner Templates</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '2px' }} /> 3 Popup Templates</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '2px' }} /> Advanced Customization</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '2px' }} /> Remove App Branding</li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', position: 'relative', transform: 'scale(1.05)', zIndex: 10 }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', color: 'white', padding: '6px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>Most Popular</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#A78BFA' }}>
            <Shield size={20} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: 'white' }}>Pro</h3>
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>Advanced features for high-volume merchants.</p>
          <div style={{ margin: '0 0 2rem 0' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'white' }}>$89</span> <span style={{ color: '#94A3B8', fontSize: '0.9rem', fontWeight: '500' }}>/ month</span>
          </div>
          <button 
            disabled={isSubmitting || activePlan === 'Pro Plan'}
            onClick={() => handleUpgrade('Pro Plan')}
            style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', marginBottom: '2rem', cursor: (isSubmitting || activePlan === 'Pro Plan') ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s', boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.4)', opacity: (isSubmitting || activePlan === 'Pro Plan') ? 0.7 : 1 }} 
            onMouseEnter={(e) => { if(!isSubmitting && activePlan !== 'Pro Plan') e.target.style.opacity = '0.9'; }} 
            onMouseLeave={(e) => { if(!isSubmitting && activePlan !== 'Pro Plan') e.target.style.opacity = '1'; }}
          >
            {activePlan === 'Pro Plan' ? 'Current Plan' : isSubmitting && submittingPlan === 'Pro Plan' ? 'Processing...' : 'Upgrade to Pro'}
          </button>
          
          <div style={{ borderTop: '1px solid #1E293B', paddingTop: '1.5rem', flex: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Everything in Starter, plus:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#E2E8F0', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#A78BFA" style={{ flexShrink: 0, marginTop: '2px' }} /> 4 Banner Templates</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#A78BFA" style={{ flexShrink: 0, marginTop: '2px' }} /> 5 Popup Templates</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#A78BFA" style={{ flexShrink: 0, marginTop: '2px' }} /> Priority Email Support</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#A78BFA" style={{ flexShrink: 0, marginTop: '2px' }} /> Early Access to New Features</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#F59E0B' }}>
            <Crown size={20} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: '#0F172A' }}>Enterprise</h3>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>Custom festive decorations, dedicated support, and multi-store setups.</p>
          <div style={{ margin: '0 0 2rem 0' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A' }}>$139</span> <span style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: '500' }}>/ month</span>
          </div>
          <button 
            disabled={isSubmitting || activePlan === 'Enterprise Plan'}
            onClick={() => handleUpgrade('Enterprise Plan')}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'white', color: '#0F172A', border: '2px solid #E2E8F0', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', marginBottom: '2rem', cursor: (isSubmitting || activePlan === 'Enterprise Plan') ? 'not-allowed' : 'pointer', transition: 'all 0.2s', opacity: (isSubmitting || activePlan === 'Enterprise Plan') ? 0.7 : 1 }} 
            onMouseEnter={(e) => { if(!isSubmitting && activePlan !== 'Enterprise Plan') { e.target.style.backgroundColor = '#F8FAFC'; e.target.style.borderColor = '#CBD5E1'; } }} 
            onMouseLeave={(e) => { if(!isSubmitting && activePlan !== 'Enterprise Plan') { e.target.style.backgroundColor = 'white'; e.target.style.borderColor = '#E2E8F0'; } }}
          >
            {activePlan === 'Enterprise Plan' ? 'Current Plan' : isSubmitting && submittingPlan === 'Enterprise Plan' ? 'Processing...' : 'Upgrade to Enterprise'}
          </button>
          
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', flex: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Everything in Pro, plus:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#475569', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} /> All Current & Future Templates</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} /> Custom Template Requests</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} /> Dedicated Account Manager</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><Check size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} /> Custom Integration Support</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

import { redirect, Form, useLoaderData } from "react-router";
import { login } from "../../shopify.server";
import { Sparkles, Palette, MousePointerClick, Zap, LayoutTemplate, MessageSquare, ShieldCheck, Snowflake, ArrowRight, Star, Settings, Image as ImageIcon } from "lucide-react";
import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }
  return { showForm: Boolean(login) };
};

export default function App() {
  const { showForm } = useLoaderData();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.index}>
      <div 
        className={styles.ambientBackground}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, rgba(15, 23, 42, 0) 50%)`
        }}
      />
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Sparkles size={20} className={styles.logoIcon} />
            Festive Store Decor
          </div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <button className={styles.navButton} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'})}>
              Login
            </button>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>Shopify App of the Week</span>
            </div>
            <h1 className={styles.heading}>
              Transform Your Store for <span className={styles.gradientText}>Every Season</span>
            </h1>
            <p className={styles.text}>
              Boost conversions with beautiful, ready-made seasonal banners, magical snow effects, and smart popups. No coding required.
            </p>
            
            {showForm && (
              <div className={styles.formWrapper}>
                <Form method="post" action="/auth/login" className={styles.formContainer}>
                  <div className={styles.inputGroup}>
                    <input className={styles.input} type="text" name="shop" placeholder="my-store.myshopify.com" required />
                    <button className={styles.button} type="submit">
                      Install App <ArrowRight size={18} />
                    </button>
                  </div>
                </Form>
              </div>
            )}
            
            <div className={styles.trustSignals}>
              <div className={styles.avatars}>
                <div className={styles.avatar} style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=1)'}}></div>
                <div className={styles.avatar} style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=2)'}}></div>
                <div className={styles.avatar} style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=3)'}}></div>
                <div className={styles.avatar} style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=4)'}}></div>
              </div>
              <div className={styles.trustText}>
                <div className={styles.stars}>
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                </div>
                <span>Loved by <strong>5,000+</strong> merchants</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupGlow}></div>
              <div className={styles.mockupWindow}>
                <div className={styles.mockupHeader}>
                  <span className={styles.dot} style={{backgroundColor: '#FF5F56'}}></span>
                  <span className={styles.dot} style={{backgroundColor: '#FFBD2E'}}></span>
                  <span className={styles.dot} style={{backgroundColor: '#27C93F'}}></span>
                </div>
                <div className={styles.mockupBody}>
                  <div className={styles.mockBanner}>
                    <Sparkles size={14} style={{ marginRight: '6px' }} /> HUGE HOLIDAY SALE - UP TO 50% OFF!
                  </div>
                  <div className={styles.mockMain}>
                    <div className={styles.mockSidebar}>
                      <div className={styles.mockItemActive}><Settings size={14} /> Settings</div>
                      <div className={styles.mockItem}><ImageIcon size={14} /> Templates</div>
                      <div className={styles.mockItem}><Palette size={14} /> Design</div>
                    </div>
                    <div className={styles.mockContent}>
                      <div className={styles.mockCardGroup}>
                        <div className={styles.mockCard}></div>
                        <div className={styles.mockCard}></div>
                      </div>
                      <div className={styles.mockChart}></div>
                    </div>
                  </div>
                  <div className={styles.snowContainer}>
                    <Snowflake size={24} color="white" className={styles.mockSnow} style={{left: '20%', animationDelay: '0s'}} />
                    <Snowflake size={16} color="white" className={styles.mockSnow} style={{left: '50%', animationDelay: '1.5s'}} />
                    <Snowflake size={20} color="white" className={styles.mockSnow} style={{left: '80%', animationDelay: '0.7s'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Box Features Section */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Everything you need to <span className={styles.gradientText}>drive sales</span></h2>
            <p className={styles.sectionSubtitle}>Powerful tools designed to seamlessly integrate with your store and convert visitors into buyers.</p>
          </div>
          <div className={styles.bentoGrid}>
            
            <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper} style={{ color: '#A78BFA', background: 'rgba(139, 92, 246, 0.1)' }}>
                  <LayoutTemplate size={28} />
                </div>
                <h3 className={styles.cardTitle}>Festive Banners</h3>
                <p className={styles.cardText}>
                  High-converting templates for Black Friday, Christmas, Valentine's Day, and every holiday in between. Drive urgency and highlight your best offers.
                </p>
                <div className={styles.cardVisualLarge}>
                  <div className={styles.miniBanner} style={{background: 'linear-gradient(to right, #EF4444, #B91C1C)'}}>🎄 Christmas Sale Active</div>
                  <div className={styles.miniBanner} style={{background: 'linear-gradient(to right, #000000, #333333)'}}>⚡ Black Friday Deals</div>
                </div>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper} style={{ color: '#38BDF8', background: 'rgba(56, 189, 248, 0.1)' }}>
                  <Snowflake size={28} />
                </div>
                <h3 className={styles.cardTitle}>Magical Animations</h3>
                <p className={styles.cardText}>
                  Delight visitors with subtle snowfall, floating hearts, or autumn leaves.
                </p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper} style={{ color: '#10B981', background: 'rgba(16, 185, 129, 0.1)' }}>
                  <MessageSquare size={28} />
                </div>
                <h3 className={styles.cardTitle}>Smart Popups</h3>
                <p className={styles.cardText}>
                  Capture leads and prevent cart abandonment with exit-intent technology.
                </p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardWide}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper} style={{ color: '#F59E0B', background: 'rgba(245, 158, 11, 0.1)' }}>
                  <Palette size={28} />
                </div>
                <div className={styles.wideContent}>
                  <div className={styles.wideContentText}>
                    <h3 className={styles.cardTitle}>Drag & Drop Editor</h3>
                    <p className={styles.cardText}>
                      Customize colors, text, and layouts in real-time. Make sure every banner matches your brand perfectly without writing any code.
                    </p>
                  </div>
                  <div className={styles.colorPalette}>
                    <div className={styles.colorSwatch} style={{background: '#3B82F6'}}></div>
                    <div className={styles.colorSwatch} style={{background: '#10B981'}}></div>
                    <div className={styles.colorSwatch} style={{background: '#F59E0B'}}></div>
                    <div className={styles.colorSwatch} style={{background: '#EF4444'}}></div>
                    <div className={styles.colorSwatch} style={{background: '#8B5CF6'}}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Steps Section */}
        <section id="how-it-works" className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>How it works</h2>
              <p className={styles.sectionSubtitle}>Get started in less than 2 minutes. No developer required.</p>
            </div>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Install App</h3>
                <p className={styles.stepText}>Add the app to your Shopify store in seconds with zero code.</p>
              </div>
              <div className={styles.stepConnector}></div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Pick a Template</h3>
                <p className={styles.stepText}>Select a festive template and customize it to match your offer.</p>
              </div>
              <div className={styles.stepConnector}></div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Launch & Convert</h3>
                <p className={styles.stepText}>Publish your seasonal campaign and watch your sales grow.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <Sparkles size={20} className={styles.logoIcon} />
            <span style={{ fontWeight: 700, color: 'white' }}>Festive Store Decor</span>
          </div>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

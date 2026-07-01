import { redirect, Form, useLoaderData } from "react-router";
import { login } from "../../shopify.server";
import { Sparkles, Palette, MousePointerClick, Zap, LayoutTemplate, MessageSquare, ShieldCheck, Snowflake } from "lucide-react";
import styles from "./styles.module.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function App() {
  const { showForm } = useLoaderData();

  return (
    <div className={styles.index}>
      <div className={styles.container}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.badge}>
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
            Festive Store Decor App
          </div>
          <h1 className={styles.heading}>
            Transform Your Store <br/> for Every Season
          </h1>
          <p className={styles.text}>
            Boost conversions with beautiful, ready-made seasonal banners, magical snow effects, and smart popups. No coding required.
          </p>
          
          {showForm && (
            <div className={styles.formContainer}>
              <Form method="post" action="/auth/login">
                <label className={styles.label}>
                  <span>Enter your store URL to install or login</span>
                  <input className={styles.input} type="text" name="shop" placeholder="e.g. my-store.myshopify.com" required />
                </label>
                <button className={styles.button} type="submit">
                  Install / Login
                </button>
              </Form>
            </div>
          )}
        </section>

      </div>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Everything you need for seasonal sales</h2>
          <div className={styles.grid}>
            
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <LayoutTemplate size={32} />
              </div>
              <h3 className={styles.cardTitle}>Festive Banners</h3>
              <p className={styles.cardText}>
                Choose from dozens of high-converting templates for Black Friday, Christmas, Valentine's Day, and more.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper} style={{ color: '#38BDF8', background: 'rgba(56, 189, 248, 0.1)' }}>
                <Snowflake size={32} />
              </div>
              <h3 className={styles.cardTitle}>Magical Animations</h3>
              <p className={styles.cardText}>
                Delight your visitors with subtle snowfall, floating hearts, or spooky bats with a single click.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper} style={{ color: '#10B981', background: 'rgba(16, 185, 129, 0.1)' }}>
                <MessageSquare size={32} />
              </div>
              <h3 className={styles.cardTitle}>Smart Popups</h3>
              <p className={styles.cardText}>
                Capture leads and prevent cart abandonment with exit-intent popups tailored to the holiday season.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper} style={{ color: '#F59E0B', background: 'rgba(245, 158, 11, 0.1)' }}>
                <Palette size={32} />
              </div>
              <h3 className={styles.cardTitle}>Drag & Drop Editor</h3>
              <p className={styles.cardText}>
                Customize colors, text, and layouts in real-time. Make sure every banner matches your brand perfectly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <div className={styles.stepsGrid}>
            <div>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.cardTitle}>Install App</h3>
              <p className={styles.cardText}>Add the app to your Shopify store in seconds with zero code.</p>
            </div>
            <div>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.cardTitle}>Pick a Template</h3>
              <p className={styles.cardText}>Select a festive template and customize it to match your offer.</p>
            </div>
            <div>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.cardTitle}>Launch & Convert</h3>
              <p className={styles.cardText}>Publish your seasonal campaign and watch your sales grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.heading} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem' }}>
            Ready to boost your holiday sales?
          </h2>
          <p className={styles.text} style={{ margin: '0 auto 3rem' }}>
            Join thousands of merchants who use Festive Store Decor to create engaging seasonal campaigns.
          </p>
          <button className={styles.button} style={{ maxWidth: '300px' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Get Started Now
          </button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Festive Store Decor. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

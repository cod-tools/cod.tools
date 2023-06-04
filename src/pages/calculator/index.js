import Link from 'next/link';
import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import './index.css';

export default function Calculator() {
  return (
    <>
      <Head>
        <title>Call of Dragons Calculator | cod.tools</title>
        <meta name="description" content="Coming Soon..." />
      </Head>
      <div className="calculator-page-background" />
      <div className="calculator-content">
        <Header />

        <div className="calculator-container">
          <aside className="sidebar">
            <h2>Tools</h2>
            <Link key="wikibot" href="/wikibot">
              <a className="sidebar-link">Call of Dragons Wiki Bot</a>
            </Link>
            <Link key="calculator" href="/calculator">
              <a className="sidebar-link">Call of Dragons Calculator</a>
            </Link>
          </aside>

          <main className="main-section">
            <img src='/logo1.png' alt="Logo" />
            <h1 className="calculator-title">Call of Dragons <span className='calculator-gold'>Calculator</span></h1>
            <div className="calculator-sections">
              <Link key="wikibot" href="/wikibot">
                <a className="calculator-section">
                  <h2 className="calculator-section-title">Call of Dragons Wiki Bot</h2>
                  <p className="calculator-section-description">Discord Bot that presents details about Call of Dragons heroes, artifacts, and behemoths</p>
                </a>
              </Link>
              <a className="calculator-section">
                <h2 className="calculator-section-title">Call of Dragons Calculator</h2>
                <p className="calculator-section-description">Coming Soon...</p>
              </a>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};
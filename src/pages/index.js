import Link from 'next/link';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import "./index.css"

export default function Home() {
  return (
    <>
      <div className="home-page-background" />
      <div className="home-content">
        <Header />
        <div className="home-container">
          <img src='/logo1.png' alt="Logo" />
          <h1 className="home-title">Call of Dragons <span className='home-gold'>Tools</span></h1>
          <div className="home-sections">
            <Link key="wikibot" href="/wikibot">
              <a className="home-section">
                <h2 className="home-section-title">Call of Dragons Wiki Bot</h2>
                <p className="home-section-description">Discord Bot that presents details about Call of Dragons heroes, artifacts, and behemoths</p>
              </a>
            </Link>
            <a className="home-section">
              <h2 className="home-section-title">Coming Soon...</h2>
              <p className="home-section-description">Coming Soon...</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
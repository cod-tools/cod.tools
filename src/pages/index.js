import Link from 'next/link';
import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import "./index.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Call of Dragons Guides and Tools | cod.tools</title>
        <meta name="description" content="Discover useful tools for mastering Call of Dragons. Enhance your gameplay, level up your skills, and dominate with our comprehensive resources and tools." />
      </Head>
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
                <p className="home-section-description">Discord Bot that presents details about Call of Dragons heroes, artifacts, and behemoths.</p>
              </a>
            </Link>
            <Link key="calculators" href="/calculators">
              <a className="home-section">
                <h2 className="home-section-title">Call of Dragons Calculators</h2>
                <p className="home-section-description">Determine the combined value of your resources and items to optimize your gameplay.</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
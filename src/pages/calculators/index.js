import Link from 'next/link';
import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Sidebar from '@/components/sidebar/sidebar';

import './index.css';

export default function Calculators() {
  return (
    <>
      <Head>
        <title>Call of Dragons Calculators | cod.tools</title>
        <meta name="description" content="Coming Soon..." />
      </Head>
      <Header />
      <div className="calculators-content">
        <div className="calculators-container">
          <Sidebar />
          <main className="main-section">
            <div className='calculators-titles'>
              <h1 className="calculators-title">Call of Dragons Calculators</h1>
              <h2 className='calculators-description'>This is a description</h2>
            </div>
            <div className="calculators-sections">
              <Link key="wikibot" href="/calculators/speedups">
                <a className="calculators-section">
                  <h2 className="calculators-section-title">Speedups Calculator</h2>
                  <p className="calculators-section-description">Calculate the total amount of speedups you have</p>
                </a>
              </Link>
              <a className="calculators-section">
                <h2 className="calculators-section-title">Call of Dragons Calculators</h2>
                <p className="calculators-section-description">Coming Soon...</p>
              </a>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
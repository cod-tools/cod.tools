import Link from 'next/link';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import "./index.css"

export default function Home() {
  return (
    <>
      <div className="page-background" />
      <div className="content">
        <Header />
        <div className="container">
          <img src='/logo1.png'/>
          <h1 className="title">Call of Dragons <span className='gold'>Tools</span></h1>
          <div className="sections">
            <Link key="wikibot" href="/wikibot">
              <a className="section">
                <h2 className="section-title">Call of Dragons Wiki Bot</h2>
                <p className="section-description">Discord Bot that presents details about Call of Dragons heroes, artifacts, and behemoths</p>
              </a>
            </Link>
            <a className="section">
              <h2 className="section-title">Coming Soon...</h2>
              <p className="section-description">Coming Soon...</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
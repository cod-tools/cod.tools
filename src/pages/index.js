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
      <div className="home-page-background" alt="Background" />
      <div className="home-content">
        <Header />
        <div className="home-container">
          <img src='/logo1.png' alt="Logo" />
          <div className='home-titles'>
            <h1 className="home-title">Call of Dragons <span className='home-gold'>Tools</span></h1>
            <h2 className='home-description'>Discover useful tools for mastering Call of Dragons. Enhance your gameplay, level up your skills, and dominate with our comprehensive resources and tools.</h2>
          </div>
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
        <p className="seo-text">
          Welcome to our website, your ultimate destination for Call of Dragons tools! Get ready to embark on an extraordinary journey through the mythical realms of Call of Dragons, armed with our arsenal of powerful resources and comprehensive tools.
          Discover a treasure trove of Call of Dragons tools designed to enhance your gameplay, elevate your skills, and propel you towards victory. Our collection of meticulously crafted guides is your key to unlocking the game's secrets. Dive deep into character customization, delve into intricate strategies, and uncover hidden tactics that will give you the edge in every battle.
          But our offerings don't end there. We believe in equipping you with the means to optimize your gameplay experience. Our advanced calculators enable you to fine-tune your resource management, item combinations, and decision-making. Determine the optimal strategies, plan your progression, and maximize your efficiency on your quest to greatness.
          Skill development is paramount in mastering Call of Dragons, and our website is your training ground. Immerse yourself in our interactive tutorials and training materials, honing your combat prowess, refining your spellcasting abilities, and perfecting your tactical maneuvers. With our tools and resources at your disposal, you'll rise above the competition and become a legendary force to be reckoned with.
          Join our community of Call of Dragons enthusiasts and equip yourself with the most powerful tools available. Unleash your true potential, conquer challenges, and dominate the realms of Call of Dragons like never before. Your journey to becoming a true dragon master starts here. Explore our Call of Dragons tools and embark on an adventure of a lifetime.
        </p>
      </div>
      <Footer />
    </>
  );
};
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

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
          <Image width={409} height={301} src='/logo1.png' alt="Logo" />
          <div className='home-titles'>
            <h1 className="home-title">Call of Dragons <span className='home-gold'>Tools</span></h1>
            <p className='home-description'>Discover useful tools for mastering Call of Dragons. Enhance your gameplay, level up your skills, and dominate with our comprehensive resources and tools.</p>
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
        <div className="seo-text">
          <p>Immerse yourself in the captivating universe of Call of Dragons, a gripping game that skillfully combines the genre of fantasy RPGs with the tactical prowess required in strategy games. The title beautifully fuses these elements to provide an unparalleled gaming experience.</p>
          <p>Known for its dynamic gameplay, Call of Dragons is brimming with mythical beasts and legendary warriors. At its heart, it&apos;s a game about strategy, resource management, and tactical warfare. With Call of Dragons tools at your disposal, you can unravel a unique gaming journey, dictated by your choices and strategic decisions.</p>
          <p>Experience the thrill of leading your mighty armies to victory using the Call of Dragons tools. These tools allow you to effectively manage your resources, plan strategies, and coordinate attacks against your adversaries. Whether it&apos;s about training your dragon or planning the layout of your castle, the Call of Dragons tools come handy in every aspect of the game.</p>
          <p>The in-game environment is incredibly immersive, with detailed graphics and engaging storylines that pull you into the world of mythical creatures and legendary heroes. The user interface is user-friendly, designed to assist even the novice players in navigating through the game with the help of Call of Dragons tools.</p>
          <p>Every player is the master of their own destiny in this game. By leveraging the Call of Dragons tools, you can build your castle, train dragons, form alliances, and lead epic battles. The game offers the perfect blend of strategic planning and real-time action, ensuring an engaging experience throughout.</p>
          <p>The Call of Dragons tools play a pivotal role in determining your progress in the game. These tools assist in organizing your army, deploying troops, managing resources, and implementing tactics in the heat of battle. From newbie gamers to seasoned veterans, everyone will find these tools beneficial.</p>
          <p>Call of Dragons offers a unique gaming experience that caters to both casual gamers and hardcore strategists alike. The Call of Dragons tools offer an in-depth approach to strategy, allowing you to plan, adapt, and outsmart your opponents in a world where survival is dictated by wit and cunning.</p>
          <p>Embrace the immersive world of Call of Dragons, where every decision counts, every strategy matters, and your mastery of the Call of Dragons tools could mean the difference between victory and defeat. With stunning graphics, captivating storylines, and a myriad of strategic options at your fingertips, Call of Dragons will keep you engrossed for hours on end.</p>
          <p>What sets Call of Dragons apart from other fantasy strategy games is the emphasis it places on the player&apos;s strategic abilities and how effectively they can use the Call of Dragons tools. The game demands more than just quick reflexes; it requires the ability to think ahead, plan effectively, and execute strategies with precision.</p>
          <p>Experience the thrill of conquering territories, the excitement of training mythical creatures, and the satisfaction of creating an impenetrable fortress with Call of Dragons tools. It&apos;s not just a game; it&apos;s a journey into a world of fantasy, strategy, and adventure. Embark on your quest today and prove your worth in the world of Call of Dragons.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
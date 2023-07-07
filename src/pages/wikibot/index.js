import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import './index.css';

export default function WikiBot() {
  return (
    <>
      <Head>
        <title>Call of Dragons Discord Wiki Bot | cod.tools</title>
        <meta name="description" content="Access all the information you need about Call of Dragons with our reliable Wiki Bot. Discover details on heroes, artifacts, and behemoths, all in one place. " />
      </Head>
      <Header />
      <div className="wiki-infobox">
        <h1 className="wiki-title">Call of Dragons Wiki Bot</h1>
        <div className="wiki-button-group">
          <a className="wiki-button" href="https://discord.com/api/oauth2/authorize?client_id=1100937871969501364&permissions=274878024704&scope=bot" target="_blank">
            Invite Bot
          </a>
          <a className="wiki-button" href="https://top.gg/bot/1100937871969501364/vote" target="_blank">
            Vote Bot
          </a>
          <a className="wiki-button" href="https://discord.com/invite/X4h7cjPzgh" target="_blank">
            Support Server
          </a>
          <a className="wiki-button" href="https://github.com/GamerRaven/Call-of-Dragons-Wiki-Bot" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      <div className="wiki-features">
        <h1 className="wiki-section-title">Features</h1>
        <div className="wiki-features-row">
          <div className="wiki-features-box">
            <h2 className="wiki-box-title">Heroes</h2>
            <div className="wiki-bottom-container">
              <Image width={525} height={755} src="https://raw.githubusercontent.com/GamerRaven/Call-of-Dragons-Wiki-Bot/main/.readme/Hero.png" alt="Feature 1" />
              <p className="wiki-description">Learn about the effectiveness, roles, buffs, and pairings of heroes.</p>
            </div>
          </div>
          <div className="wiki-features-box">
            <h2 className="wiki-box-title">Artifacts</h2>
            <div className="wiki-bottom-container">
              <Image width={191} height={410} src="https://raw.githubusercontent.com/GamerRaven/Call-of-Dragons-Wiki-Bot/main/.readme/Artifact.png" alt="Feature 2" />
              <p className="wiki-description">Learn about the usage and effectiveness of artifacts.</p>
            </div>
          </div>
        </div>
        <div className="wiki-features-row">
          <div className="wiki-features-box">
            <h2 className="wiki-box-title">Behemoths</h2>
            <div className="wiki-bottom-container">
              <Image width={405} height={564} src="https://raw.githubusercontent.com/GamerRaven/Call-of-Dragons-Wiki-Bot/main/.readme/Behemoth.png" alt="Feature 3" />
              <p className="wiki-description">Learn about what each behemoth does and how to defeat them.</p>
            </div>
          </div>
          <div className="wiki-features-box">
            <h2 className="wiki-box-title">Tier List</h2>
            <div className="wiki-bottom-container">
              <Image width={209} height={440} src="https://i.imgur.com/MjcVhFo.png" alt="Feature 4" />
              <p className="wiki-description">Get a sorted Tier List to learn which heroes and artifacts to invest in.</p>
            </div>
          </div>
        </div>
        <h1 className="wiki-spacer" />
      </div>
      <div className="wiki-commands">
        <h1 className="wiki-section-title">Commands</h1>
        <div className="wiki-command-table">
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/help</h2>
            <p className="wiki-command-description">Get a list of all available commands</p>
          </div>
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/heroes</h2>
            <p className="wiki-command-description">Get a list of all available heroes</p>
          </div>
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/hero &lt;name&gt;</h2>
            <p className="wiki-command-description">Get information about a hero</p>
          </div>
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/behemoths</h2>
            <p className="wiki-command-description">Get a list of all available behemoths</p>
          </div>
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/behemoth &lt;name&gt;</h2>
            <p className="wiki-command-description">Get information about a behemoth</p>
          </div>
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/artifacts</h2>
            <p className="wiki-command-description">Get a list of all available artifacts</p>
          </div>
          <div className="wiki-command-row">
            <h2 className="wiki-command-name">/artifact &lt;name&gt;</h2>
            <p className="wiki-command-description">Get information about an artifact</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
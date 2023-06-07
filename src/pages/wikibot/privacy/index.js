import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import "./index.css"

export default function Privacy() {
  return (
    <>
      <Header />
      <Head>
        <title>CoD Wiki Bot Privacy Policy | cod.tools</title>
        <meta name="description" content="Privacy Policy for the usage of Call of Dragons Wiki Bot" />
      </Head>
      <div className="privacy-page-background" />
      <div className="privacy-content">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <div className="privacy-sections">
            <section className="privacy-section">
              <h2 className="privacy-section-title">Information Collection</h2>
              <p className="privacy-section-description">
                Our Call of Dragons Wiki Bot does not collect any personal information from its users. We do not gather, store, or track any data that can be used to identify individuals.
              </p>
            </section>
            <section className="privacy-section">
              <h2 className="privacy-section-title">Information Usage</h2>
              <p className="privacy-section-description">
                Since we do not collect any user information, we do not use or share any personal data. The Call of Dragons Wiki Bot is designed to provide information and services without requiring any personal details from its users.
              </p>
            </section>
            <section className="privacy-section">
              <h2 className="privacy-section-title">Information Security</h2>
              <p className="privacy-section-description">
                We prioritize the security of user data, even though we do not collect any personal information. Our technical measures are in place to protect the bot and its infrastructure against unauthorized access, data breaches, or any other potential threats.
              </p>
            </section>
            <section className="privacy-section">
              <h2 className="privacy-section-title">Third-Party Links</h2>
              <p className="privacy-section-description">
                The Call of Dragons Wiki Bot may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage users to review the privacy policies of any third-party services they access through our bot.
              </p>
            </section>
            <section className="privacy-section">
              <h2 className="privacy-section-title">Children&apos;s Privacy</h2>
              <p className="privacy-section-description">
                Our Call of Dragons Wiki Bot is not intended for children under the age of 13. We do not knowingly collect any personal information from children. If we discover that we have unintentionally collected personal data from a child, we will promptly delete it from our systems.
              </p>
            </section>
            <section className="privacy-section">
              <h2 className="privacy-section-title">Changes to this Privacy Policy</h2>
              <p className="privacy-section-description">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the &quot;Last Updated&quot; date will be revised accordingly. We encourage users to review this Privacy Policy periodically for any updates.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
import Head from 'next/head';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import "./index.css"

export default function TOS() {
  return (
    <>
      <Header />
      <Head>
        <title>CoD Wiki Bot Terms of Service | cod.tools</title>
        <meta name="description" content="Terms of Service for usage of Call of Dragons Wiki Bot" />
      </Head>
      <div className="terms-page-background" />
      <div className="terms-content">
        <div className="terms-container">
          <h1 className="terms-title">Terms of Service</h1>
          <div className="terms-sections">
            <section className="terms-section">
              <h2 className="terms-section-title">Introduction</h2>
              <p className="terms-section-description">
                Welcome to the Terms of Service for the usage of the Call of Dragons Wiki Bot. By using the bot, you agree to comply with the following terms and conditions.
              </p>
            </section>
            <section className="terms-section">
              <h2 className="terms-section-title">Content and Ownership</h2>
              <p className="terms-section-description">
                All content available on the Call of Dragons Wiki Bot is owned or provided by the bot's owner or its licensors. The owner makes every effort to ensure that the content provided does not infringe any legal provisions or third-party rights. However, if you believe that any content violates your rights, please contact us using the provided contact details.
              </p>
              <p className="terms-section-description">
                The owner retains all intellectual property rights for the content available on the bot. You may not use the content in any way that goes beyond the proper use of the bot. This includes copying, downloading, sharing, modifying, translating, publishing, transmitting, selling, sublicensing, editing, or creating derivative works from the content without explicit permission from the owner.
              </p>
              <p className="terms-section-description">
                Some content may be available for personal and non-commercial use, as explicitly stated on the bot. In such cases, you may download, copy, and/or share the content for your personal use, provided that you comply with all copyright and attribution requirements specified by the owner.
              </p>
            </section>
            <section className="terms-section">
              <h2 className="terms-section-title">External Resources</h2>
              <p className="terms-section-description">
                The Call of Dragons Wiki Bot may provide access to external resources offered by third parties. The bot's owner does not control or take responsibility for the content and availability of these resources. Any conditions or rights related to these external resources are governed by the terms and conditions of the respective third parties or applicable statutory law.
              </p>
              <p className="terms-section-description">
                The bot may display advertisements provided by third parties. The owner does not control or moderate these advertisements, and any interaction with them is solely between you and the responsible third party. The owner is not responsible for any consequences resulting from such interactions, including visits to third-party websites or the use of third-party content.
              </p>
            </section>
            <section className="terms-section">
              <h2 className="terms-section-title">Acceptable Use</h2>
              <p className="terms-section-description">
                Your use of the Call of Dragons Wiki Bot and its services must comply with these Terms of Service and applicable laws and regulations. You are solely responsible for ensuring that your use of the bot does not violate any laws, regulations, or third-party rights.
              </p>
              <p className="terms-section-description">
                The bot's owner reserves the right to take appropriate measures to protect its legitimate interests, including denying access to the bot or its services, terminating contracts, and reporting any misconduct to the relevant authorities. The following activities are strictly prohibited:
              </p>
              <ul>
                <li>Impersonating or misrepresenting any condition or requirement for accessing the bot or its services</li>
                <li>Concealing your identity or stealing someone else's identity</li>
                <li>Manipulating identifiers to disguise the origin of your messages or content</li>
                <li>Defaming, abusing, harassing, or violating the legal rights of others</li>
                <li>Promoting self-destructive or violent behavior</li>
                <li>Attempting to disrupt or tamper with the bot's technical infrastructure</li>
                <li>Using malware or engaging in spamming or other inappropriate activities</li>
                <li>Publishing or disseminating unlawful, obscene, discriminatory, or inappropriate content</li>
                <li>Infringing on intellectual property rights or violating third-party rights</li>
                <li>Disrupting or violating the integrity of the bot or another user's experience</li>
                <li>Misappropriating or harvesting other users' personal information</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
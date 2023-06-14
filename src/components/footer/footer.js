import Image from 'next/image';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="https://github.com/cod-tools" target="_blank" className="footer-text">Call of Dragons Tools</a>
        <Image src="/logo2.png" width={90} height={66} alt="Logo" className='logo'/>
        <a className='footer-discord' href="https://discord.com/invite/X4h7cjPzgh" target='_blank'>Join Discord Server<Image className="footer-discord-icon" src="/discord.png" width={39} height={30} alt="Discord Server" /></a>
      </div>
    </footer>
  );
};

export default Footer;
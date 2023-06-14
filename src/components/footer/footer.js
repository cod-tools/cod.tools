import Link from 'next/link';
import Image from 'next/image';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Call of Dragons Tools</p>
        <Image src="/logo2.png" width={90} height={66} alt="Logo" className='logo'/>
        <Link href="https://github.com/GamerRaven">
          <a className="bwl-text">Built with ❤️ by GamerRaven</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
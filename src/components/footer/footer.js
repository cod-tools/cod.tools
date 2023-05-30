import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Call of Dragons Tools</p>
        <img src="/logo2.png" className='logo'/>
        <Link href="https://github.com/GamerRaven">
          <a className="bwl-text">Built with ❤️ by GamerRaven</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
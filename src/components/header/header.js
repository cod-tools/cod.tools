import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 

import "./header.css"

const Header = () => {
  const router = useRouter();
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/wikibot', name: 'Wiki Bot' },
    { path: '/calculators', name: 'Calculators' },
  ];

  const [isNotHome, setIsNotHome] = useState(false);

  useEffect(() => {
    setIsNotHome(router.pathname !== '/');
  }, [router.pathname]);

  return (
    <header className={`header ${isNotHome ? 'header-not-home' : ''}`}>
      <Link href="/">
        <a className="logo-container">
          <img src="/icon.png" />
        </a>
      </Link>
      <nav className="nav">
        {pages.map(page => (
          <div className="nav-item" key={page.path}>
            <Link href={page.path}>
              <a className={`nav-link font-montserrat ${router.pathname === page.path ? 'text-accent' : 'text-primary'}`}>
                {page.name}
              </a>
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
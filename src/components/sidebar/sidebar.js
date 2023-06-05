import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 

import "./sidebar.css"

const Sidebar = () => {
  const links = [
    { href: '/wikibot', name: 'Calculator 1' },
    { href: '/calculators', name: 'Calculator 2' },
  ];

  return (
    <aside className="sidebar">
        <h2 className='sidebar-title'>Calculators</h2>
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <a className="sidebar-link">{link.name}</a>
          </Link>
        ))}
    </aside>
  );
};

export default Sidebar;
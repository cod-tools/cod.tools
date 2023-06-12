import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import "./sidebar.css";
import { Container } from "postcss";

// icons
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
    const links = [
        { href: "/calculators/speedups", name: "Speedups" },
    ];

    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className={menuOpen ? "sidebar-container" : "sidebar-open"}>
            <aside className="sidebar">
                <h2 className="sidebar-title">Calculators</h2>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <a className="sidebar-link">{link.name}</a>
                    </Link>
                ))}
            </aside>
            <div
                className="sidebar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="sidebar-toggle-line">
                    {!menuOpen ? (
                        <IoClose className="sidebar-toggle-icon" />
                    ) : (
                        <BiMenuAltLeft className="sidebar-toggle-icon" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

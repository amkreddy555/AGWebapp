"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.css';

const Header = () => {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const sections = ['hero', 'products', 'services', 'video', 'reviews', 'about', 'faq'];
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -70% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#hero' },
        { name: 'Products', href: '/#products' },
        { name: 'Services', href: '/#services' },
        { name: 'Media', href: '/#video' },
        { name: 'Reviews', href: '/#reviews' },
        { name: 'About', href: '/#about' },
        { name: 'FAQ', href: '/#faq' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navbar}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                    </div>
                    <div className={styles.logoText}>
                        <h1 className="glow-text">AQUAGENIUS</h1>
                        <span>ULTRA PURE WATER</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`${styles.navItem} ${((pathname.includes('/products/') || pathname === '/signin') && link.name === 'Home')
                                        ? ''
                                        : (pathname.includes('/products/') && link.name === 'Products') ||
                                            activeSection === link.href.split('#')[1]
                                            ? styles.active : ''
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <Link href="/signin" className={styles.loginBtn}>
                        Sign In
                    </Link>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavVisible : ''}`}>
                <ul className={styles.mobileLinks}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`${styles.mobileItem} ${((pathname.includes('/products/') || pathname === '/signin') && link.name === 'Home')
                                    ? ''
                                    : (pathname.includes('/products/') && link.name === 'Products') ||
                                        activeSection === link.href.split('#')[1]
                                        ? styles.active : ''
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsMenuOpen(false);
                            }}
                            className={styles.mobileItem}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            {theme === 'dark' ? 'Switch to Light Mode ☀️' : 'Switch to Dark Mode 🌙'}
                        </button>
                    </li>
                    <li>
                        <Link
                            href="/signin"
                            className={styles.mobileLoginBtn}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

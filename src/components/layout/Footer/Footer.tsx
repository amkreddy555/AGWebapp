import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={`container ${styles.grid}`}>
                    <div className={styles.brand}>
                        <h2 className="glow-text">AQUAGENIUS</h2>
                        <p className={styles.tagline}>Redefining hydration with intelligent purification.</p>
                        <div className={styles.socials}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" width={20} height={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width={20} height={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Company</h4>
                        <Link href="/#about">About Us</Link>
                        <Link href="/#products">Our Products</Link>
                        <Link href="/#services">Services</Link>
                        <Link href="/#faq">FAQ</Link>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contact Us</h4>
                        <p>Sai Samrat Nagar, <br />Old Alwal area, Hyderabad</p>
                        <div className={styles.contactWays}>
                            <a href="tel:09666687000" className={styles.contactLink}>📞 096666 87000</a>
                            <a href="https://wa.me/919666687000" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>💬 WhatsApp</a>
                            <a href="mailto:aquagenius2023@gmail.com" className={styles.contactLink}>✉️ aquagenius2023@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AquaGenius. Designed for Purity.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

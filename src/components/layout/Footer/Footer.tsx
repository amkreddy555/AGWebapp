import Link from 'next/link';
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
                            {/* Social Icons would go here */}
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
                        <a href="tel:09666687000">096666 87000</a>
                        <span>aquagenius2023@gmail.com</span>
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

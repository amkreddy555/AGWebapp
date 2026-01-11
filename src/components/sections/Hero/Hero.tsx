"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const slides = [
    {
        image: '/assets/hero_bg.png',
        badge: 'Next-Gen Purification',
        title: <>The Intelligent Choice for <br /><span className="gradient-text">Pure Water.</span></>,
        subtitle: 'Experience the Deep Ocean treatment. Advanced RO, UV, and Copper technology crafted for those who refuse to compromise on health.'
    },
    {
        image: '/assets/poster_lineup.png',
        badge: 'Dynamic Range',
        title: <>Pure Solutions for <br /><span className="gradient-text">Every Lifestyle.</span></>,
        subtitle: 'From compact models to IoT-enabled smart purifiers, we have the perfect fit for your modern home.'
    },
    {
        image: '/assets/usp_highlight.png',
        badge: 'The AquaGenius USP',
        title: <>Engineering <br /><span className="gradient-text">Absolute Purity.</span></>,
        subtitle: '8-stage filtration meets intelligent mineralization. Because your family deserves nothing but the best.'
    },
    {
        image: '/assets/purchase_offers.png',
        badge: 'Owner Benefits',
        title: <>Exclusive Offers on <br /><span className="gradient-text">Every Purchase.</span></>,
        subtitle: 'Get Free Installation and 1 Year Free AMC when you buy any AquaGenius purifier today.'
    },
    {
        image: '/assets/sub_offers.png',
        badge: 'Smart Subscription',
        title: <>Pure Water with <br /><span className="gradient-text">Zero Commitment.</span></>,
        subtitle: 'Subscribe for 6 months or more and enjoy Free Installation plus hassle-free maintenance.'
    }
];

const Hero = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentIdx];

    return (
        <section className={styles.hero}>
            {slides.map((s, idx) => (
                <div
                    key={idx}
                    className={`${styles.bgLayer} ${currentIdx === idx ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${s.image})` }}
                />
            ))}
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <div className={styles.inner}>
                    <div key={currentIdx} className={styles.slideContent}>
                        <span className={styles.badge}>{slide.badge}</span>
                        <h2 className={styles.title}>
                            {slide.title}
                        </h2>
                        <p className={styles.subtitle}>
                            {slide.subtitle}
                        </p>
                    </div>
                    <div className={styles.ctaGroup}>
                        <Link href="#products" className={styles.primaryBtn}>
                            Explorer Catalog
                        </Link>
                        <Link href="#video" className={styles.secondaryBtn}>
                            Watch Video
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative pulse element */}
            <div className={styles.pulse}></div>
        </section>
    );
};


export default Hero;


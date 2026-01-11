"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import styles from './ProductPage.module.css';

const productsData = {
    'copper-plus': {
        name: 'AquaGenius Copper+',
        tagline: 'Active Copper & Zinc Infusion',
        price: 12500,
        rent: 499,
        image: '/assets/copper_plus.png',
        gallery: ['/assets/copper_plus.png', '/assets/cp_side.png', '/assets/cp_lifestyle.png'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        features: ['RO + UV + Copper', 'pH Balanced', 'Smart Sensors', 'Auto-Flush Technology'],
        desc: 'The ultimate health-focused purifier that infuses your water with the goodness of Copper and Zinc, ensuring every drop is charged with essential minerals.',
        specs: {
            'Technology': 'RO + UV + Copper + Zinc',
            'Storage': '8 Liters',
            'Stages': '7 Stage Purification',
            'Dispense': 'Electronic Tap',
            'Material': 'Food Grade ABS'
        }
    },
    'smart-iot': {
        name: 'AquaGenius Smart',
        tagline: 'Intelligent Water Management',
        price: 18500,
        rent: 699,
        image: '/assets/smart_iot.png',
        gallery: ['/assets/smart_iot.png', '/assets/smart_angle.png', '/assets/smart_detail.png'],
        video: 'https://www.w3schools.com/html/movie.mp4',
        features: ['IoT Enabled', 'Alkaline Infusion', 'Touch Control', 'Filter Life Tracker'],
        desc: 'A futuristic purifier that connects to your smartphone. Monitor water quality, filter life, and daily consumption in real-time.',
        specs: {
            'Technology': 'IoT RO + UV + Alkaline',
            'Storage': '10 Liters',
            'Stages': '9 Stage Purification',
            'Dispense': 'Sensitive Touch',
            'Material': 'Premium Polycarbonate'
        }
    },
    'basic-ro': {
        name: 'AquaGenius Basic',
        tagline: 'Pure & Simple Hydration',
        price: 8999,
        rent: 399,
        image: '/assets/basic_midnight.png',
        gallery: ['/assets/basic_midnight.png', '/assets/basic_detail.png', '/assets/basic_white.png'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        features: ['High Recovery RO', 'Mineral Booster', 'Compact Design', 'Energy Efficient'],
        desc: 'Our most efficient purifier designed for urban homes. Delivers pure water while minimizing wastage, perfect for families who value sustainability.',
        specs: {
            'Technology': 'RO + Mineral Post-Filter',
            'Storage': '7 Liters',
            'Stages': '5 Stage Purification',
            'Dispense': 'Manual Lever',
            'Material': 'Food Grade ABS'
        }
    },
    'gold-standard': {
        name: 'AquaGenius Gold',
        tagline: 'The Pinnacle of Purification',
        price: 10500,
        rent: 449,
        image: '/assets/gold_midnight.png',
        gallery: ['/assets/gold_midnight.png', '/assets/gold_luxury.png', '/assets/gold_top.png'],
        video: 'https://www.w3schools.com/html/movie.mp4',
        features: ['8 Stage Filtration', 'Copper + Zinc', 'Auto Flush', 'Luminous Display'],
        desc: 'A premium 8-stage purification system that combines luxury design with military-grade filtration technology.',
        specs: {
            'Technology': '8-Stage RO + UV + Minerals',
            'Storage': '9 Liters',
            'Stages': '8 Stage Purification',
            'Dispense': 'Soft Push Button',
            'Material': 'Double Layered PC'
        }
    }
};

export default function ProductDetail() {
    const params = useParams();
    const id = params.id as string;
    const product = productsData[id as keyof typeof productsData];
    const [activeImage, setActiveImage] = useState(product?.image);
    const [isPaused, setIsPaused] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (!product || isPaused || showVideo) return;

        const timer = setInterval(() => {
            const currentIdx = product.gallery.indexOf(activeImage);
            const nextIdx = (currentIdx + 1) % product.gallery.length;
            setActiveImage(product.gallery[nextIdx]);
        }, 2500);

        return () => clearInterval(timer);
    }, [activeImage, product, isPaused, showVideo]);

    if (!product) return <div>Product Not Found</div>;

    const otherProducts = Object.entries(productsData).filter(([key]) => key !== id);

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.imageCol}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <div className={styles.imageWrapper}>
                                {showVideo ? (
                                    <video
                                        src={product.video}
                                        className={styles.pdpVideo}
                                        autoPlay
                                        muted
                                        loop
                                        controls
                                    />
                                ) : (
                                    <Image
                                        src={activeImage || product.image}
                                        alt={product.name}
                                        width={600}
                                        height={600}
                                        className={styles.productImg}
                                    />
                                )}

                                <button
                                    className={`${styles.videoGlimpseBtn} ${showVideo ? styles.activeVideo : ''}`}
                                    onClick={() => setShowVideo(!showVideo)}
                                >
                                    {showVideo ? 'Photo View' : 'Video Glimpse'}
                                </button>
                            </div>
                            <div className={styles.gallery}>
                                {product.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.thumb} ${activeImage === img ? styles.activeThumb : ''}`}
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <Image src={img} alt="Thumbnail icon" width={80} height={80} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.contentCol}>
                            <span className={styles.tag}>{product.tagline}</span>
                            <h1 className="glow-text">{product.name}</h1>
                            <p className={styles.description}>{product.desc}</p>

                            <div className={styles.featureGrid}>
                                {product.features.map(f => (
                                    <div key={f} className={styles.featureItem}>
                                        <span className={styles.check}>✓</span> {f}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.pricingCards}>
                                <div className={styles.priceCard}>
                                    <span>OWN IT</span>
                                    <h2>₹{product.price.toLocaleString()}</h2>
                                    <button className={styles.buyBtn}>Buy Now</button>
                                </div>
                                <div className={`${styles.priceCard} ${styles.rentCard}`}>
                                    <span>RENT IT</span>
                                    <h2>₹{product.rent}/mo</h2>
                                    <button className={styles.rentBtn}>Subscribe</button>
                                </div>
                            </div>

                            <Link href="/#products" className={styles.backLink}>← Back to Catalog</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.comparisonSection}>
                <div className="container">
                    <h2 className="glow-text">How it Compares</h2>
                    <div className={styles.matrixWrapper}>
                        <table className={styles.matrix}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    {Object.entries(productsData).map(([key, p]) => (
                                        <th key={key} className={key === id ? styles.activeCol : ''}>
                                            <div className={styles.matrixHeaderProduct}>
                                                <div className={styles.matrixProductImg}>
                                                    <Image src={p.image} alt={p.name} width={60} height={60} />
                                                </div>
                                                <span>{p.name.replace('AquaGenius ', '')}</span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(product.specs).map((specKey) => (
                                    <tr key={specKey}>
                                        <td className={styles.specLabelCell}>{specKey}</td>
                                        {Object.entries(productsData).map(([key, p]) => (
                                            <td key={key} className={key === id ? styles.activeCol : ''}>
                                                {p.specs[specKey as keyof typeof p.specs] || '—'}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                <tr>
                                    <td className={styles.specLabelCell}>Investment</td>
                                    {Object.entries(productsData).map(([key, p]) => (
                                        <td key={key} className={key === id ? styles.activeCol : ''}>
                                            <div className={styles.matrixPrice}>
                                                <strong>₹{p.price.toLocaleString()}</strong>
                                                <span>or ₹{p.rent}/mo</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={styles.relatedSection}>
                <div className="container">
                    <h2 className="glow-text">Explore Other Models</h2>
                    <div className={styles.relatedGrid}>
                        {otherProducts.map(([key, item]) => (
                            <Link href={`/products/${key}`} key={key} className={styles.relatedCard}>
                                <div className={styles.relatedImgWrapper}>
                                    <Image src={item.image} alt={item.name} width={200} height={200} />
                                </div>
                                <h3>{item.name}</h3>
                                <span>₹{item.price.toLocaleString()}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

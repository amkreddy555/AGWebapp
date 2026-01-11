"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import styles from './ProductPage.module.css';

import { productsData } from './productsData';

interface ProductClientProps {
    id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
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

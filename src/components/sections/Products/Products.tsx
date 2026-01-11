"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Products.module.css';

interface Product {
    id: string;
    name: string;
    features: string[];
    buyPrice: number;
    rentPrice: number;
    image: string;
    tag?: string;
}

const products: Product[] = [
    {
        id: 'copper-plus',
        name: 'AquaGenius Copper+',
        features: ['RO + UV + Copper', 'pH Balanced', 'Smart Sensors'],
        buyPrice: 12500,
        rentPrice: 499,
        image: '/assets/copper_plus.png',
        tag: 'Bestseller'
    },
    {
        id: 'smart-iot',
        name: 'AquaGenius Smart',
        features: ['IoT Enabled', 'Alkaline Infusion', 'Touch Control'],
        buyPrice: 18500,
        rentPrice: 699,
        image: '/assets/smart_iot.png',
        tag: 'Next-Gen'
    },
    {
        id: 'basic-ro',
        name: 'AquaGenius Basic',
        features: ['High Recovery RO', 'Mineral Booster', 'Compact'],
        buyPrice: 8999,
        rentPrice: 399,
        image: '/assets/basic_midnight.png',
        tag: 'Value'
    },
    {
        id: 'gold-standard',
        name: 'AquaGenius Gold',
        features: ['8 Stage Filtration', 'Copper + Zinc', 'Auto Flush'],
        buyPrice: 10500,
        rentPrice: 449,
        image: '/assets/gold_midnight.png',
        tag: 'Premium'
    }
];

const Products = () => {
    return (
        <section className={styles.products} id="products">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Our Collections</span>
                    <h2 className={styles.title}>Refined Purification.</h2>
                    <p className={styles.desc}>
                        Select the perfect fit for your home. Each model is engineered for the specific
                        water conditions of Hyderabad.
                    </p>
                </div>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.cardInner}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={styles.image}
                                    />
                                    {product.tag && (
                                        <span className={styles.tag}>{product.tag}</span>
                                    )}
                                </div>

                                <div className={styles.cardBody}>
                                    <h3 className={styles.name}>{product.name}</h3>
                                    <div className={styles.features}>
                                        {product.features.map(f => (
                                            <span key={f} className={styles.featureItem}>{f}</span>
                                        ))}
                                    </div>

                                    <div className={styles.pricing}>
                                        <div className={styles.priceCol}>
                                            <span className={styles.priceLabel}>Own it</span>
                                            <strong className={styles.priceValue}>₹{product.buyPrice.toLocaleString()}</strong>
                                        </div>
                                        <div className={styles.divider}></div>
                                        <div className={styles.priceCol}>
                                            <span className={styles.priceLabel}>Rent it</span>
                                            <strong className={styles.priceValue}>₹{product.rentPrice}<small>/mo</small></strong>
                                        </div>
                                    </div>

                                    <Link href={`/products/${product.id}`} className={styles.ctaBtn}>
                                        Select Model
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

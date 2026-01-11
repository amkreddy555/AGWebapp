"use client";

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    { q: 'How often should I change the filters?', a: 'Every 6-8 months, depending on usage. Our smart models will notify you automatically.' },
    { q: 'Do you service other purifier brands?', a: 'Yes, our technicians are certified for all major Indian water purifier brands.' },
    { q: 'What is included in the Rental plan?', a: 'Machine, monthly service, and all parts/filter changes at zero extra cost.' },
    { q: 'Is there an installation charge?', a: 'Professional installation is complimentary with every purchase or rental subscription.' }
];

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className={styles.faq} id="faq">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Common Clarities.</h2>
                </div>

                <div className={styles.list}>
                    {faqs.map((f, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className={styles.question}>
                                <h3>{f.q}</h3>
                                <span className={styles.icon}>{open === i ? '−' : '+'}</span>
                            </div>
                            <div className={styles.answer}>
                                <p>{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

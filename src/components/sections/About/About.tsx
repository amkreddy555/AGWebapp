import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <span className={styles.subtitle}>Our Legacy</span>
                    <h2 className={styles.title}>Dedicated to <br />Pure Water.</h2>
                    <p className={styles.text}>
                        Founded in the heart of Hyderabad, AquaGenius isn't just a business—it's a mission
                        to redefine family hydration. We bridge the gap between heavy industrial
                        filtration and the delicate touch required for home health.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <strong className="gradient-text">5k+</strong>
                            <span>Families</span>
                        </div>
                        <div className={styles.stat}>
                            <strong className="gradient-text">24/7</strong>
                            <span>Protection</span>
                        </div>
                    </div>
                </div>

                <div className={styles.founderCard}>
                    <div className={styles.founderImg}>
                        {/* Image visibility prioritized; glossy info panel overlaps */}
                    </div>
                    <div className={styles.founderInfo}>
                        <h4>Mr. Gopi</h4>
                        <span>Founder & Visionary</span>
                        <p className={styles.quote}>
                            "Purity is not a feature; it is a fundamental right. We promise only what
                            nature intended: Perfection."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

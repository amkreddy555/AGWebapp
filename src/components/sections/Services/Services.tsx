import styles from './Services.module.css';

const services = [
    {
        icon: '🛠️',
        title: 'Expert Service',
        description: 'Precision maintenance for all major brands, ensuring your water remains pristine.'
    },
    {
        icon: '🛡️',
        title: 'AMC Protection',
        description: 'Comprehensive annual care plans that take the worry out of water safety.'
    },
    {
        icon: '🚀',
        title: 'Express Setup',
        description: 'White-glove installation service with zero-leak guarantee and smart optimization.'
    }
];

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Infinite Care.</h2>
                    <p className={styles.desc}>
                        Our commitment doesn't end at the sale. We provide lifelong support for your health journey.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

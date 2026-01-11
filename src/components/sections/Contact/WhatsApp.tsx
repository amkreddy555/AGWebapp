import styles from './WhatsApp.module.css';

const WhatsApp = () => {
    return (
        <a
            href="https://wa.me/919666687000"
            className={styles.float}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <div className={styles.pulse}></div>
            <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
                alt="WhatsApp"
                className={styles.icon}
            />
        </a>
    );
};

export default WhatsApp;

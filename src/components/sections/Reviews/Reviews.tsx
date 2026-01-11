import styles from './Reviews.module.css';

const reviews = [
    { name: 'Rajesh Kumar', text: 'The Copper model exceeded my expectations. Water tastes noticeably better.', rating: 5 },
    { name: 'Sneha Reddy', text: 'Professional installation and excellent customer support. Highly recommend!', rating: 4 },
    { name: 'Vikram Singh', text: 'The AMC plan is a life-saver for our office. Hassle-free service.', rating: 5 },
    { name: 'Priya Sharma', text: 'Sleek design and super quiet operation. Best investment for my family.', rating: 5 },
    // Duplicate for loop
    { name: 'Rajesh Kumar ', text: 'The Copper model exceeded my expectations. Water tastes noticeably better.', rating: 5 },
    { name: 'Sneha Reddy ', text: 'Professional installation and excellent customer support. Highly recommend!', rating: 4 }
];

const Reviews = () => {
    return (
        <section className={styles.reviews} id="reviews">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Trusted by Thousands.</h2>
                    <p className={styles.desc}>Real stories from the families of Hyderabad who chose purity.</p>
                </div>
            </div>

            <div className={styles.marquee}>
                <div className={styles.track}>
                    {reviews.map((r, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                            <p className={styles.quote}>"{r.text}"</p>
                            <span className={styles.author}>— {r.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

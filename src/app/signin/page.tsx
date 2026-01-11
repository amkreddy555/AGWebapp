"use client";

import Link from 'next/link';
import styles from './SignIn.module.css';

export default function SignIn() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Auth logic would go here
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h1 className="glow-text">Welcome Back</h1>
                        <p>Sign in to your AquaGenius account</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label>Email or Mobile Number</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="name@company.com or 10-digit mobile"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$|^[0-9]{10}$"
                                title="Please enter a valid email or a 10-digit mobile number"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Sign In
                        </button>
                    </form>

                    <div className={styles.footer}>
                        Don't have an account? <Link href="#" className={styles.link}>Request Access</Link>
                    </div>

                    <Link href="/" className={styles.backHome}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

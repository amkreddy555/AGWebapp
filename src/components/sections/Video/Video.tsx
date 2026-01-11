"use client";

import { useState } from 'react';
import styles from './Video.module.css';

const videos = [
    {
        id: 'overview',
        title: 'Purity in Motion',
        desc: 'Witness the revolutionary Deep Ocean treatment process.',
        thumb: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80'
    },
    {
        id: 'tech',
        title: 'RO + Copper Tech',
        desc: 'How our advanced filters infuse essential minerals.',
        thumb: 'https://images.unsplash.com/photo-1584043720379-b56cd9199c94?auto=format&fit=crop&w=1600&q=80'
    },
    {
        id: 'smart-app',
        title: 'Smart IoT App',
        desc: 'Real-time water quality monitoring on your phone.',
        thumb: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80'
    }
];

const Video = () => {
    const [activeVideo, setActiveVideo] = useState(videos[0]);

    return (
        <section id="video" className={styles.video}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="glow-text">{activeVideo.title}</h2>
                    <p className={styles.desc}>{activeVideo.desc}</p>
                </div>

                <div className={styles.playerContainer}>
                    <div className={styles.mainPlayer}>
                        <div className={styles.player} style={{ backgroundImage: `url(${activeVideo.thumb})` }}>
                            <div className={styles.playButton}>
                                <div className={styles.playIcon}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist}>
                        {videos.map((v) => (
                            <div
                                key={v.id}
                                className={`${styles.playlistItem} ${activeVideo.id === v.id ? styles.activeItem : ''}`}
                                onClick={() => setActiveVideo(v)}
                            >
                                <div className={styles.miniThumb} style={{ backgroundImage: `url(${v.thumb})` }}></div>
                                <div className={styles.miniInfo}>
                                    <h4>{v.title}</h4>
                                    <span>{activeVideo.id === v.id ? 'Playing Now' : 'Watch Video'}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;

import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Hero from '../components/sections/Hero/Hero';
import Products from '../components/sections/Products/Products';
import Services from '../components/sections/Services/Services';
import Video from '../components/sections/Video/Video';
import Reviews from '../components/sections/Reviews/Reviews';
import About from '../components/sections/About/About';
import FAQ from '../components/sections/FAQ/FAQ';
import WhatsApp from '../components/sections/Contact/WhatsApp';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Video />
        <Reviews />
        <About />
        <FAQ />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}

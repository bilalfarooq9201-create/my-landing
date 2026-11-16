import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Reveal from './components/Reveal';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Reveal><CardGrid /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><ContactForm /></Reveal>
      </main>
      <footer>© 2026 MyBrand</footer>
    </>
  );
}
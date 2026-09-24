import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

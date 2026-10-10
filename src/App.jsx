import { useEffect } from "react";
import { gymConfig } from "./config/gymConfig.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Programs from "./components/Programs.jsx";
import Membership from "./components/Membership.jsx";
import Trainers from "./components/Trainers.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  // SEO: title and description come from config
  useEffect(() => {
    document.title = `${gymConfig.gymName} | Premium Gym & Personal Training`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = gymConfig.description;
  }, []);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Membership />
        <Trainers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

import { useRef } from "react";
import About from "./About";
import Footer from "./Footer";
import Carousel from "./Grid";
import Hero from "./Hero"; 
import Header from "./Header";
import Contact from "./Contact";

export default function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onContactClick={scrollToContact} />
      <Hero />
      <Carousel />
      <About />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

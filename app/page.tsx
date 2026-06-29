import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 40px" }} />
      <About />
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 40px" }} />
      <Experience />
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 40px" }} />
      <Projects />
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 40px" }} />
      <Stack />
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 40px" }} />
      <Contact />
      <Footer />
    </main>
  );
}

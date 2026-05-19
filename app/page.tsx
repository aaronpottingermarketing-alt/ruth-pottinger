import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NAETTherapy from "@/components/NAETTherapy";
import Programmes from "@/components/Programmes";
import Testimonials from "@/components/Testimonials";
import BookCTA from "@/components/BookCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <NAETTherapy />
        <Programmes />
        <Testimonials />
        <BookCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingSection from "./components/BookingSection";
import About from "./components/About";
import LocationHours from "./components/LocationHours";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MarqueeBand from "./components/MarqueeBand";
import PhotoStrip from "./components/PhotoStrip";
import StickyBook from "./components/StickyBook";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <Introduction />
        <Services />
        <PhotoStrip />
        <Gallery />
        <WhyChooseUs />
        <BookingSection />
        <About />
        <LocationHours />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBook />
    </>
  );
}

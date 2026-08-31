import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSlider from "@/components/TreatmentsSlider";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSlider />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

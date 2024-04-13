import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <mian className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar/>
    <div className="container mt-24 mx-auto px-12 p-y ">
    <HeroSection/>
    <AboutSection/>
    </div>
    </mian>
    
  );
}

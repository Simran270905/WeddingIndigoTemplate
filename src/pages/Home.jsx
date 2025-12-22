import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import Events from "../components/Events";
import Venue from "../components/Venue";
import Family from "../components/Family";
import Closing from "../components/Closing";
import AestheticPhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#212842] text-[#F0E7D5] overflow-hidden">
      <Hero />
      <Invitation />
      <AestheticPhotoGallery/>
      <Events />
      <Venue />
      <Family />
      <Closing />
      <Footer/>
    </main>
  );
}

import Image from "next/image";
import Banner from "./components/home/Banner";
import TrustedBy from "./components/home/TrustedBy";
import Services from "./components/home/Services";
import MarketPlaces from "./components/home/MarketPlaces";
import OurProcess from "./components/home/OurProcess";
import FAQ from "./components/shared/Faq";
import SocialMediaBanner from "./components/shared/SocialMediaBanner";
import MeetOurClients from "./components/home/MeetOurClients";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrustedBy/>
      <Services/>
      <MarketPlaces/>
      <MeetOurClients/>
      <OurProcess/>
      <FAQ/>
      <SocialMediaBanner/>
    </div>
  );
}

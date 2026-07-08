import Image from "next/image";
import Banner from "./components/home/Banner";
import TrustedBy from "./components/home/TrustedBy";
import Services from "./components/home/Services";
import MarketPlaces from "./components/home/MarketPlaces";
import OurProcess from "./components/home/OurProcess";
import FAQ from "./components/shared/Faq";
// import MeetOurClients from "./components/home/MeetOurClients";
import DemoWorks from "./components/shared/DemoWorks";
import ChallengesYouFace from "./components/solutions/ChallengesYouFace";
import SolutionsWeOffer from "./components/solutions/SolutionsWeOffer";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrustedBy/>
      <ChallengesYouFace />
      <SolutionsWeOffer />
      <MarketPlaces/>
      <Services/>
      {/* <MeetOurClients/> */}
      <DemoWorks/>
      <OurProcess/>
      <FAQ/>
    </div>
  );
}

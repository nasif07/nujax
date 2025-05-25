import MeetOurClients from "../components/home/MeetOurClients";
import SectionHeader from "../components/SectionHeader";
import FAQ from "../components/shared/Faq";
import SocialMediaBanner from "../components/shared/SocialMediaBanner";
import batch from "@/app/assets/guaranteedBatch.svg";
import Banner from "../components/solutions/Banner";
import ChallengesYouFace from "../components/solutions/ChallengesYouFace";
const page = () => {
  return (
    <>
    <Banner/>
    <ChallengesYouFace/>
    <MeetOurClients/>
    
      <div className="bg-[#010205] pt-16">
        <SectionHeader
          title={"3X Your Engagement in 60 Days - Or We Work for Free."}
          button={"Success Guaranteed"}
          batch={batch}></SectionHeader>
      </div>
      <FAQ />
      <SocialMediaBanner />
    </>
  );
};

export default page;

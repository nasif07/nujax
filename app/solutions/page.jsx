import MeetOurClients from "../components/home/MeetOurClients";
import SectionHeader from "../components/SectionHeader";
import FAQ from "../components/shared/Faq";
import SocialMediaBanner from "../components/shared/SocialMediaBanner";
import batch from "@/app/assets/guaranteedBatch.svg";
import Banner from "../components/solutions/Banner";
import ChallengesYouFace from "../components/solutions/ChallengesYouFace";
import SolutionsWeOffer from "../components/solutions/SolutionsWeOffer";
const page = () => {
  return (
    <>
      <Banner />

      <ChallengesYouFace />
      <SolutionsWeOffer />
      <MeetOurClients />

      <div className="bg-[#010205] pt-16">
        <SectionHeader
          title={
            <>
              3X Your Engagement in 60 Days -{" "}
              <span className="text-[#EC4845]">Or We Work for Free. </span>
            </>
          }
          button={"Success Guaranteed"}
          batch={batch}></SectionHeader>
      </div>
      <FAQ />
      <SocialMediaBanner />
    </>
  );
};

export default page;

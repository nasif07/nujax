import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import DemoWorks from "../components/shared/DemoWorks";
import FAQ from "../components/shared/Faq";
import SocialMediaBanner from "../components/shared/SocialMediaBanner";
import batch from "@/app/assets/guaranteedBatch.svg";

const page = () => {
  return (
    <>
      <Container>
        <SectionHeader
          title={"Our recent works"}
          subTitle={
            "Check out our wide range of video projects, highlighting our skill in crafting impactful and engaging video."
          }></SectionHeader>
      </Container>
      <DemoWorks />
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
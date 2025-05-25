import Container from "../Container";
import SectionHeader from "../SectionHeader";
import script from "@/app/assets/solutions/script.png";
import shorts from "@/app/assets/solutions/shorts.png";
import socialMedia from "@/app/assets/solutions/socialMedia.png";
import Image from "next/image";

const SolutionsWeOffer = () => {
  const solutions = [
    {
      icon: script,
      title: "Market Proven Strategy & Scripts",
      subtitle:
        "We craft scripts and content ideas tailored to your industry, audience, and goals-just record and go.",
    },
    {
      icon: shorts,
      title: "Done-for-You Content Creation",
      subtitle: "You’re posting reactively instead of strategically.",
    },
    {
      icon: socialMedia,
      title: "Full Distribution & Management",
      subtitle:
        "We handle everything: SEO, posting, and optimization across Instagram, LinkedIn, YouTube, and Facebook.",
    },
  ];
  return (
    <Container>
      <SectionHeader
        button="Solutions"
        title={
          <>
            The <span className="text-[#EC4845]">solutions </span> we offer
          </>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  max-w-6xl mx-auto">
        {solutions.map((process, index) => {
          const isLast = index === solutions.length - 1;
          return (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(73deg, #373A42 -120.95%, #000205 97.22%)",
              }}
              className={`px-12 pt-12 border border-[#292C33] rounded-3xl flex justify-normal items-start ${
                isLast ? "md:col-span-2" : "flex-col "
              }`}>
              <div className="space-y-4">
                <div className="text-white w-10 h-10 rounded-full bg-[#EC4845] flex justify-center items-center">
                  0{index + 1}
                </div>
                <h4 className="text-[#EC4845] text-[36px] font-semibold max-w-[400px]">
                  {process.title}
                </h4>
                <p className="text-white text-base font-medium max-w-[330px]">
                  {process.subtitle}
                </p>
              </div>
              <div className="mx-auto">
                <Image
                  src={process.icon}
                  alt={process.title}
                  className="w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default SolutionsWeOffer;

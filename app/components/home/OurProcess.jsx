import Container from "../Container";
import SectionHeader from "../SectionHeader";
import playButton from "@/app/assets/playButton.svg";
import sms from "@/app/assets/sms.svg";
import download from "@/app/assets/download.svg";
import Image from "next/image";

const OurProcess = () => {
  const processes = [
    {
      icon: playButton,
      title: "Request",
      subtitle: "You provide your footage and any recommendation.",
    },
    {
      icon: sms,
      title: "Review",
      subtitle:
        "Our experienced team bring the plan to life with high quality visuals and SFX. Than submits for feedback.",
    },
    {
      icon: download,
      title: "Download",
      subtitle: "We provide any required changes and submit in any format!",
    },
  ];
  return (
    <Container>
      <SectionHeader
        title={"We make Content Creation Easy For You!"}
        subTitle={
          "Easy process, fast turnaround thats where we shine in our business!"
        }
        button={"Our Proccess"}
        rootClasses={"max-w-[500px] mb-8"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {processes.map((process, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center py-8">
            <div
              style={{
                background:
                  "radial-gradient(400.52% 215.22% at -30.93% 148.46%, #373A42 6.7%, #000205 100%)",
              }}
              className="rounded-full p-10 border-2 border-[#2B2E35] mb-3">
              <Image
                src={process.icon}
                alt={process.title}
                className="w-[80px] h-[80px]"
              />
            </div>
            <h4 className="text-white text-3xl">{process.title}</h4>
            <p className="text-[#878C91] text-base font-medium max-w-[320px]">
              {process.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurProcess;

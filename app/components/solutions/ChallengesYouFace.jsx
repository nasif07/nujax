import Container from "../Container";
import SectionHeader from "../SectionHeader";
import clock from "@/app/assets/solutions/clock.svg";
import horse from "@/app/assets/solutions/horse.svg";
import eye from "@/app/assets/solutions/eye.svg";
import Image from "next/image";

const ChallengesYouFace = () => {
   const challenges = [
      {
        icon: clock,
        title: "Limited Time",
        subtitle: "You can’t spend hours each week just creating content.",
      },
      {
        icon: horse,
        title: "No Game Plan",
        subtitle:
          "You’re posting reactively instead of strategically.",
      },
      {
        icon: eye,
        title: "Weak Visibility",
        subtitle: "Your content isn’t converting viewers into followers or followers into clients.",
      },
    ];
  return (
    <Container>
      <SectionHeader
        button="Problems"
        title={
          <>
            The <span className="text-[#EC4845]">Challenges</span> You Face
          </>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {challenges.map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 text-center py-16 border border-[#292C33] rounded-4xl">
                  <div
                    style={{
                      background:
                        "radial-gradient(400.52% 215.22% at -30.93% 148.46%, #373A42 6.7%, #000205 100%)",
                    }}
                    className="rounded-full p-12 border-2 border-[#2B2E35] mb-3">
                    <Image
                      src={process.icon}
                      alt={process.title}
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                  <h4 className="text-[#EC4845] text-3xl">{process.title}</h4>
                  <p className="text-[#878C91] text-base font-medium max-w-[320px]">
                    {process.subtitle}
                  </p>
                </div>
              ))}
            </div>
    </Container>
  );
};

export default ChallengesYouFace;

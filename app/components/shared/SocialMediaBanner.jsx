import Container from "../Container";
import image from "@/app/assets/shared/socialMediaBanner.png";
import background from "@/app/assets/shared/upScaleBg.png";
import Image from "next/image";

const SocialMediaBanner = () => {
  return (
    <Container>
      <section className="flex items-center bg-[#EC4845] rounded-4xl overflow-hidden pt-10 ">
        <div
          style={{ backgroundImage: `url(${background.src})` }}
          className=" rounded-3xl bg-no-repeat bg-left w-4/9">
          <Image
            src={image}
            alt="Social Media"
            className="h-auto object-contain"
          />
        </div>

        <div className=" text-white px-6 space-y-6">
          <h1
            style={{ lineHeight: "108%" }}
            className="text-[64px] font-semibold max-w-[450px]">
            Ready to GO Viral on social media?
          </h1>
          <p className="text-base font-medium max-w-[400px]">
            Don't let confusion and uncertainty slow your business down—let's
            clear things up and move forward together!
          </p>
          <button className="py-4 px-8 text-[#192031] text-base font-bold bg-white rounded-[30px] cursor-pointer">
            Book a call
          </button>
        </div>
      </section>
    </Container>
  );
};

export default SocialMediaBanner;

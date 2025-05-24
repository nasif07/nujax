import Container from "../Container";
import Button from "../Button";
import noteBook from "@/app/assets/services/noteBook.svg";
import handPhone from "@/app/assets/services/handPhone.svg";
import monitor from "@/app/assets/services/monitor.svg";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      image: noteBook,
      title: "Content Idea & Script",
      subtitle: "Struggling with ideas? We craft scroll-stopping concepts that hook your audience and keep them watching!",
    },
    {
      image: handPhone,
      title: "Short-form Videos",
      subtitle: "High-impact, fast-paced edits designed to explode your views and engagement. Perfect for TikTok, Reels, & Shorts!",
    },
    {
      image: monitor,
      title: "Full Length Videos",
      subtitle: "Keep them watching till the end! We turn raw footage into binge-worthy content that builds loyal fans.",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Button>We can help with</Button>
          <h2 className="text-white font-semibold text-[48px] max-w-[600px] mt-10">
            Guaranteed Social Media Buzz – More Views, More Engagement!
          </h2>
        </div>
        {services.map((service, index) => (
          <div
            key={index}
            style={{background: 'radial-gradient(400.52% 215.22% at -30.93% 148.46%, #373A42 6.7%, #000205 100%)', borderRadius: '30px'}}
            className="p-6 flex flex-col justify-center gap-4 items-center min-h-[350px]">
            <div className="mb-4 w-16 h-16 relative ">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-white font-semibold text-[32px]">
              {service.title}
            </h3>
            <p className="text-[#878C91] font-medium text-base text-center max-w-[500px]">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;

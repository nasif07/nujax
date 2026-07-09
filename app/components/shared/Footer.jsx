import Image from "next/image";
import Container from "../Container";
import logo from "@/public/gooblique-logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Services",
    links: [
      "Short form edit",
      "Long form edit",
      "SM Branding",
      "Content idea",
      "Script writing",
    ],
  },
  {
    title: "More",
    links: ["About Us", "Schedule Call", "Partner Program"],
  },
  {
    title: "Contact Info",
    links: [
      "+880 1537 4283 71",
      "Hey@boostim.com",
      "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <Container>
      <footer className="py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* First Column - Bigger */}
          <div className="flex-1 lg:max-w-[38%]">
            <Image src={logo} alt="gooblique logo" className="w-36 mb-3" />
            <div className="flex flex-wrap gap-4 mt-6 py-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#192031] bg-white p-3 rounded-full">
                  <div className="text-xl">{item.icon}</div>
                </a>
              ))}
            </div>
            <p className="text-sm sm:text-base text-[#9B9B9C] leading-6">
              A creative video editing agency specializing in storytelling, visual effects, and seamless post-production. We focus on understanding your vision and transforming your ideas into captivating visual content that leaves a lasting impact.
            </p>
          </div>

          {/* Other 3 Columns */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-8 flex-1">
            {footerLinks.map((column, index) => (
              <div className="flex-1" key={index}>
                <h3 className="text-lg font-semibold mb-6 text-white">
                  {column.title}
                </h3>
                <ul className="space-y-4 text-sm sm:text-base text-[#9B9B9C]">
                  {column.links.map((link, i) => {
                    const href = link === "Schedule Call" ? process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/30min" : "#";

                    return (
                      <li key={i}>
                        <a
                          href={href}
                          target={link === "Schedule Call" ? "_blank" : undefined}
                          rel={link === "Schedule Call" ? "noopener noreferrer" : undefined}
                          className="hover:underline">
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

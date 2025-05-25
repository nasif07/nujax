import Image from "next/image";
import Container from "../Container";
import logo from "@/public/nujax.svg";
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
    links: ["About Us", "Contact us", "Partner Program"],
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
        <div className="flex flex-col md:flex-row gap-10">
          {/* First Column - Bigger */}
          <div className="flex-1 max-w-[570px] mr-10">
            <Image src={logo} alt="nujax logo" className="w-40 mb-3" />
            <div className="flex gap-4 mt-6 py-7">
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
            <p className="text-sm text-[#9B9B9C] leading-5.5">
              A creative video editing agency specializing in storytelling,
              visual effects, and seamless post-production. We focus on
              understanding your vision and transforming your ideas into
              captivating visual content that leaves a lasting impact.
            </p>
          </div>

          {/* Other 3 Columns */}
          <div className="flex-1 flex justify-between">
            {footerLinks.map((column, index) => (
              <div className="flex-1" key={index}>
                <h3 className="text-lg font-semibold mb-8 text-white">
                  {column.title}
                </h3>
                <ul className="space-y-6 text-sm text-[#9B9B9C]">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
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

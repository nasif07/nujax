import React from "react";
import Container from "../Container";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import afterpay from "@/app/assets/trustedBy/afterpay.svg";
import basecamp from "@/app/assets/trustedBy/basecamp.svg";
import maze from "@/app/assets/trustedBy/maze.svg";

const logos = [afterpay, basecamp, maze];

const TrustedBy = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
        <h2 className="text-white text-base font-semibold leading-[160%] text-center md:text-left text-nowrap">
          Trusted by the <span className="text-[#EC4845]">100+</span> <br />
          creator and owners!
        </h2>

        <div className="w-full">
          <Marquee autoFill pauseOnHover gradient={false} speed={50}>
            {logos.map((src, index) => (
              <div key={index} className="mx-8 w-32">
                <Image
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  width={128}
                  height={64}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </Container>
  );
};

export default TrustedBy;

"use client";

import { useState } from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { MdEmail } from "react-icons/md";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Page = () => {
  const contactInfo = {
    mobileNo: "+880 1537 4283 71",
    email: "Hey@boostim.com",
    location: "Get Location",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: replace with API call or EmailJS if needed
  };

  return (
    <Container>
      <SectionHeader
        title="Contact us now!"
        subTitle="Let's hop into a call and discuss the problem you are facing."
      />

      {/* Contact Info Section */}
      <div className="text-[#EC4845] text-3xl flex justify-center items-center gap-8 py-10 flex-wrap">
        <div className="inline-flex items-center gap-4 px-6 py-4 border border-[#292C33] rounded-4xl">
          <MdEmail />
          <span className="text-[#E6E6E6] font-medium text-xl">
            {contactInfo.email}
          </span>
        </div>
        <div className="inline-flex items-center gap-4 px-6 py-4 border border-[#292C33] rounded-4xl">
          <FaPhoneAlt />
          <span className="text-[#E6E6E6] font-medium text-xl">
            {contactInfo.mobileNo}
          </span>
        </div>
        <div className="inline-flex items-center gap-4 px-6 py-4 border border-[#292C33] rounded-4xl">
          <FaLocationDot />
          <span className="text-[#E6E6E6] font-medium text-xl">
            {contactInfo.location}
          </span>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="text-[#656567] text-lg">
        <div className="flex gap-10 w-full flex-col md:flex-row">
          <div className="flex flex-col gap-5 border border-[#292C33] px-10 py-6 rounded-4xl w-full">
            <label
              className="text-white font-medium text-xl"
              htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="border-b border-[#656567] bg-transparent focus:outline-0 text-white placeholder:text-[#656567]"
              placeholder="Type here"
              required
            />
          </div>
          <div className="flex flex-col gap-5 border border-[#292C33] px-10 py-6 rounded-4xl w-full">
            <label className="text-white font-medium text-xl" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-[#656567] bg-transparent focus:outline-0 text-white placeholder:text-[#656567]"
              placeholder="Type here"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 border border-[#292C33] px-10 py-6 rounded-4xl w-full mt-10">
          <label className="text-white font-medium text-xl" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-b border-[#656567] bg-transparent focus:outline-0 text-white placeholder:text-[#656567]"
            placeholder="Type here"
            rows="5"
            required
          />
        </div>

        <div className="text-center pt-10">
          <button
            type="submit"
            className="inline-flex gap-8 items-center py-4 px-8 bg-[#EC4845] text-base font-bold text-white rounded-[30px] cursor-pointer hover:bg-[#d7403d] transition">
            Send <FaArrowRight />
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Page;

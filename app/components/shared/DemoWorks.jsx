"use client";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import React, { useState } from "react";
const categories = [
  "All",
  "Beauty and Fashion",
  "Coaching & Education",
  "Ecommerce Ads",
  "Finance",
  "Fitness",
  "Health and wellness",
  "Podcasts",
  "Real Estate",
  "Tiktok and reel",
  "Youtube videos",
  "Wedding edits",
];
const videos = [
  {
    category: "Tiktok and reel",
    title: "Viral TikTok Ad",
    videoId: "abc123XYZ", // replace with real ID
  },
  {
    category: "Youtube videos",
    title: "YouTube Tutorial",
    videoId: "dQw4w9WgXcQ",
  },
  {
    category: "Wedding edits",
    title: "Wedding Highlight",
    videoId: "pKpXqZ-HJ34",
  },
  {
    category: "All",
    title: "All Showreel",
    videoId: "A1B2C3D4EFG",
  },
];

const DemoWorks = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <Container background={"bg-[#EBEBEB]"}>
      <SectionHeader
        button={"Our Portfolio"}
        title={"Edits That Drive Results"}
        subTitle={
          "Check out our wide range of video projects, highlighting our skill in crafting impactful and engaging video."
        }
        titleColor="text-[#010205]"
      />
      <div className="flex flex-wrap gap-3 justify-center my-10 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-8 py-3 rounded-full text-base border transition-all duration-300 ${
              activeTab === category
                ? "bg-[#EC4845] text-white border-[#EC4845]"
                : "bg-white text-[#010205] border-[#D7D7D7] hover:border-[#EC4845] cursor-pointer"
            }`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {videos
          .filter(
            (video) => activeTab === "All" || video.category === activeTab
          )
          .map((video, index) => (
            <div
              key={index}
              className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default DemoWorks;

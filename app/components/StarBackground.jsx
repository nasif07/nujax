"use client";
import { useEffect, useState } from "react";

function StarsBackground({ count = 200 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1, // 1px - 4px
        delay: Math.random() * 5, // random delay
        duration: 1 + Math.random() * 3, // 6s - 12s cycle
        appearDelay: Math.random() * 4,
      });
    }
    setStars(arr);
  }, [count]);

  return (
    <div className="fixed inset-0 bg-[#010205] -z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-starBlink"
          style={{
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
// bg-[#040404]
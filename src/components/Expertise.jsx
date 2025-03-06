import React from "react";

const Expertise = () => {
  return (
    <div className="bg-black text-white px-6 py-12">
      <div className="text-[40px]  font-bold flex items-center syne">
        <img src="/icons/Star.png" alt="Star Icon" className="w-6 h-6 mr-2" />
        Expertise
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div>
          <h3 className="text-[24px] font-bold flex items-center syne">
            <span className="w-2 h-2 bg-white mr-2 inline-block"></span>{" "}
            Branding
          </h3>
          <p className="text-400 mt-2 tex-[16px] text-[#CBCBCB] poppins">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold flex items-center syne">
            <span className="w-2 h-2 bg-white mr-2 inline-block "></span> UI
            Design
          </h3>
          <p className="text-400 mt-2 tex-[16px] text-[#CBCBCB] poppins">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold flex items-center syne">
            <span className="w-2 h-2 bg-white mr-2 inline-block "></span> UX
            Design
          </h3>
          <p className="text-400 mt-2 tex-[16px] text-[#CBCBCB] poppins">
            I comprehend and resolve digital product issues using a user-focused
            methodology. Investigation, compassion, and visual conveyance are a
            few techniques I apply to captivate and involve your users while
            fulfilling your business requirements.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold flex items-center syne">
            <span className="w-2 h-2 bg-white mr-2 inline-block"></span>{" "}
            Development
          </h3>
          <p className="text-400 mt-2 tex-[16px] text-[#CBCBCB] poppins">
            I create user-friendly, adaptive, engaging websites. No
            cookie-cutters. No cumbersome, complex coding. Webflow forms the
            foundation of my web development approach. I employ it to produce
            safe, top-notch personalized websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

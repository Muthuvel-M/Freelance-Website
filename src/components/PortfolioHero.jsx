import React from "react";
import Navbar from "./Navbar";
import Expertise from "./Expertise";
import Work from "./Work";
import Experience from "./Experience";
import Blog from "./Blog";
import Feedback from "./Feedback";
import Question from "./Question";
import Footer from "./Footer";

const PortfolioHero = () => {
  return (
   
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 w-full">
      {/* Navbar */}
      <div className="mt-5"></div>
      <Navbar />

      {/* Space before Hero Section */}
      <div className="mt-25"></div>

      {/* Hero Text */}
      <p className="text-center  font-[800] text-[64px] leading-[80px] tracking-[0%] syne">
        I AM A{" "}
        <span className="inline-block rounded-full overflow-hidden w-16 h-10">
          <img
            src="/icons/Text-image-1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </span>{" "}
        FREELANCE
      </p>
      <p className="text-center font-syne font-extrabold text-[64px] leading-[80px] tracking-[0%] syne">
        DESIGNER{" "}
        <span className="inline-block rounded-full overflow-hidden w-16 h-10">
          <img
            src="/icons/Text-image-2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </span>{" "}
        FROM
      </p>
      <p className="text-center font-syne font-extrabold text-[64px] leading-[80px] tracking-[0%] syne">
        SAN FRANCISCO
      </p>

      {/* Logos */}
      <div className="flex space-x-5 mt-10  items-center gap-[32px]">
        <img
          src="/icons/doradesign.png"
          alt="doradesign"
          className="h-8 mt-6"
        />
        <img src="/icons/silsila.png" alt="highwave" className="h-8 mt-6" />
        <img src="/icons/wave.png" alt="SILOLA" className="h-8 mt-6" />
        {/* Description */}
        <p className="text-400 text-[#CBCBCB] font-[poppins]  text-[16px] w-[492px] h-[72px] mt-6 ">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>

      {/* Space before Expertise Section */}
      <div className="mt-10"></div>

      {/* Expertise Section */}
      <Expertise />

      {/* Space before Experience Section */}
      

      <Work />

      {/* Experience Section */}
      <Experience />

      {/* Blog Section */}
      <Blog />

      {/* Feedback Section */}
      <Feedback />
      {/* Question Section */}
      <Question />

      {/* Scrolling Text Section */}
      <div className="w-full overflow-hidden ">
        <div className="flex space-x-6 text-[56px]  text-[#CBCBCB] uppercase whitespace-nowrap items-center -ml-24 syne  ">
          <img
            src="/icons/Star.png"
            alt="Star"
            className="h-10 flex items-center justify-center"
          />
          <span className="stroke text-transparent text-[56px] font-[700] leading-[88px] tracking-0%">
            Flow
          </span>
          <img src="/icons/Star.png" alt="Star" className="h-10" />
          <span className="stroke text-transparent text-[56px] font-[700] leading-[88px] tracking-0%">
            Figma
          </span>
          <img src="/icons/Star.png" alt="Star" className="h-10" />
          <span className="stroke text-transparent text-[56px] font-[700] leading-[88px] tracking-0%">
            Designer
          </span>
          <img src="/icons/Star.png" alt="Star" className="h-10" />
          <span className="stroke text-transparent text-[56px] font-[700] leading-[88px] tracking-0%">
            Developer
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
    
  );
};

export default PortfolioHero;

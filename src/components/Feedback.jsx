import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Feedback = () => {
  return (
    <div className="bg-black text-white py-20 px-10 w-full">
      <div className="flex items-center gap-2 mb-10">
        <img src="/icons/Star.png" alt="Star" className="w-6 h-6" />
        <h2 className="text-[40px] font-[700] syne">What they say</h2>
      </div>

      <div className="flex">
        {/* Left Section - User Details */}
        <div className="w-2/5 flex  gap-4">
          <img
            src="/images/profile.png"
            alt="User"
            className="w-[64px] h-[64px] rounded-full"
          />
          <div>
            <h3 className="text-[24px] font-[600] syne">Floyd Miles</h3>
            <p className="text-[18px] font-[400] poppins text-[#CBCBCB]">
              eBay
            </p>
          </div>
        </div>

        {/* Right Section - Feedback  */}
        <div className="w-3/5 relative">
          <img
            src="/icons/quote.png"
            alt="Quote Background"
            className="absolute -top-12 left-0 w-24 h-24"
          />
          <p className="text-[32px] leading-relaxed syne">
            Synergy's resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy's resume
            builder is fantastic. It helped me create a professional resume that
            stood out to employers.
          </p>

          {/* Arrows Section */}
          <div className="flex gap-4 mt-6">
            <button className="w-10 h-10 flex items-center justify-center bg-[#CBCBCB] bg-700 hover:bg-white text-black hover:text-black rounded-full">
              <ArrowLeft size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#CBCBCB] bg-700 hover:bg-white text-black hover:text-black rounded-full">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

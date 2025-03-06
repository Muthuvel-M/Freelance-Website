import React from "react";

const Blog = () => {
  return (
    <div className="bg-black text-white py-20 px-10 w-full">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <img src="/icons/Star.png" alt="Star" className="w-6 h-6" />
          <h2 className="text-[40px] font-bold syne">Blog</h2>
        </div>
        <a href="#" className="text-white underline text-[18px] syne">
          View All
        </a>
      </div>

      <div className="space-y-10">
        {/* Blog Post 1 */}
        <div className="flex items-center justify-between">
          <img
            src="/images/work-1.png"
            alt="Blog 1"
            className=" w-[286px] h-[214.5px] rounded-lg"
          />
          <div className="flex-1 px-6">
            <p className="text-gray-400 text-[18px] leading-[27px] tracking-0% poppins">
              Nov 9, 2023
            </p>
            <h3 className="text-[40px] font-medium syne">
              How UX works in web
            </h3>
            <div className="flex gap-2 mt-2">
              <span className="border px-[24px] py-[8px] rounded-full text-[12px] syne">
                UI
              </span>
              <span className="border px-[24px] py-[8px] rounded-full text-[12px] syne">
                UX
              </span>
            </div>
          </div>
          <button className="bg-white text-black px-[32px] py-[16px] text-[14px] rounded-full syne">
            Read
          </button>
        </div>

        {/* Blog Post 2 */}
        <div className="flex items-center justify-between">
          <img
            src="/images/work-2.png"
            alt="Blog 2"
            className="w-[286px] h-[214.5px] rounded-lg"
          />
          <div className="flex-1 px-6">
            <p className="text-gray-400 text-[18px] leading-[27px] tracking-0% poppins">
              Aug 18, 2023
            </p>
            <h3 className="text-[40px] font-medium syne">
              Case study - Analysis Application.
            </h3>
            <div className="flex gap-2 mt-2">
              <span className="border px-[24px] py-[8px] rounded-full text-[12px] syne">
                Design
              </span>
              <span className="border px-[24px] py-[8px] rounded-full text-[12px] syne">
                Print
              </span>
            </div>
          </div>
          <button className="bg-white text-black px-[32px] py-[16px] text-[14px] rounded-full syne">
            Read
          </button>
        </div>

        {/* Blog Post 3 */}
        <div className="flex items-center justify-between">
          <img
            src="/images/work-3.png"
            alt="Blog 3"
            className="w-[286px] h-[214.5px] rounded-lg"
          />
          <div className="flex-1 px-6">
            <p className="text-gray-400 text-[18px] leading-[27px] tracking-0% poppins">
              Feb 16, 2023
            </p>
            <h3 className="text-[40px] font-medium syne">
              3 ways to develop your skill
            </h3>
            <div className="flex gap-2 mt-2">
              <span className="border px-[24px] py-[8px] rounded-full text-[12px] syne">
                Figma
              </span>
              <span className="border px-[24px] py-[8px] rounded-full text-[12px] syne">
                Web
              </span>
            </div>
          </div>
          <button className="bg-white text-black px-[32px] py-[16px] text-[14px] rounded-full syne">
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

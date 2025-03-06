import React from "react";

const Work = () => {
  return (
    <div className="bg-black text-white py-20 px-10 max-w-7xl mx-auto ">
      <div className="flex justify-between items-center mb-10">
        <div className="flex gap-2 items-center">
          <img src="/icons/Star.png" alt="Star" className="w-8 h-8" />
          <h2 className="text-[40px] font-bold syne">Works</h2>
        </div>
        <a href="#" className="px-5 py-2 text-[18px] underline">
          View All
        </a>
      </div>

      {/* Project 1 */}
      <div className="relative bg-[rgba(203,203,203,0.48)] backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-10 w-full overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className=" bg-[#FF804A] rounded-full blur"></div>
        </div>
        <img
          src="/images/work-1.png"
          alt="Project 1"
          className="object-cover relative z-10 workimg"
        />

        <div className="flex-1 relative z-10">
          <h3 className="text-[40px] font-semibold syne">
            Analysis Application
          </h3>
          <p className="text-gray-300 text-[18px] mt-2 poppins">
            With a user-centered approach, the goal was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="mt-4 flex gap-4">
            <button className="px-[24px] py-[8px] border border-white rounded-full text-[12px] syne">
              Figma
            </button>
            <button className="px-[24px] py-[8px] border border-white rounded-full text-[12px] syne">
              UX
            </button>
          </div>
          <div className="mt-50">
            <button className="px-[32px] py-[16px] bg-white text-black rounded-full text-[14px] syne">
              View Case Study
            </button>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="relative bg-[rgba(203,203,203,0.48)] backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-10 w-full overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className=" bg-[#FF804A] rounded-full blur"></div>
        </div>
        <img
          src="/images/work-2.png"
          alt="Project 2"
          className="rounded-xl w-full md:w-1/3 object-cover relative z-10 workimg"
        />
        <div className="flex-1 relative z-10">
          <h3 className="text-[40px] font-semibold syne">
            Fortknox Application
          </h3>
          <p className="text-gray-300 text-[18px] mt-2 poppins">
            With a user-centered approach, the goal was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="mt-4 flex gap-4">
            <button className="px-[24px] py-[8px] border border-white rounded-full text-[12px] syne">
              Mobile
            </button>
            <button className="px-[24px] py-[8px] border border-white rounded-full text-[12px] syne">
              Web
            </button>
          </div>
          <div className="mt-50">
            <button className="px-[32px] py-[16px] bg-white text-black rounded-full text-[14px] syne">
              View Case Study
            </button>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="relative bg-[rgba(203,203,203,0.48)] backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-14 w-full overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className=" bg-[#FF804A] rounded-full blur"></div>
        </div>
        <img
          src="/images/work-3.png"
          alt="Project 3"
          className="rounded-xl w-full md:w-1/3 object-cover relative z-10 workimg"
        />
        <div className="flex-1 relative z-10">
          <h3 className="text-[40px] font-semibold syne">
            Zenocide Application
          </h3>
          <p className="text-gray-300 text-[18px] mt-2 poppins">
            With a user-centered approach, the goal was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="mt-4 flex gap-4">
            <button className="px-[24px] py-[8px] border border-white rounded-full text-[12px] syne">
              App
            </button>
            <button className="px-[24px] py-[8px] border border-white rounded-full text-[12px] syne">
              Web
            </button>
          </div>
          <div className="mt-50">
            <button className="px-[32px] py-[16px] bg-white text-black rounded-full text-[14px] syne">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

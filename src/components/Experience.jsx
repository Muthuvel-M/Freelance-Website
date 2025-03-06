import React from "react";

const Experience = () => {
  return (
    <div className="bg-black text-white py-20 px-10 w-full">
      <div className="flex items-center gap-2 mb-10">
        <img src="/icons/Star.png" alt="Star" className="w-6 h-6" />
        <h2 className="text-[40px] font-[700] syne">Experience</h2>
      </div>

      <div className="space-y-6">
        {/* Experience 1 */}
        <div className="flex justify-between border-b-[1px] border-[#fff] pb-4">
          <div>
            <h3 className="text-[32px] font-[500]  syne">
              Lead Product Designer
            </h3>
          </div>
          <div className="text-right">
            <p className="font-[600] text-[24px] syne">Fortknox</p>
            <p className="text-[#ffff] text-[16px] font-[400]  poppins">
              Mar 2022 - Oct 2023
            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex justify-between border-b-[1px] border-[#fff] pb-4">
          <div>
            <h3 className="text-[32px] font-[500] syne">Intern Designer</h3>
          </div>
          <div className="text-right">
            <p className="font-[600] text-[24px] syne">OmniSafe</p>
            <p className="text-[#ffff] text-[16px] font-[400] poppins">
              Mar 2022 - Oct 2023
            </p>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="flex justify-between border-b-[1px] border-[#fff] pb-4">
          <div>
            <h3 className="text-[32px] font-[500] syne">UI Designer</h3>
          </div>
          <div className="text-right">
            <p className="font-[600] text-[24px] syne">Doradesign</p>
            <p className="text-[#ffff] text-[16px] font-[400] poppins">
              Mar 2022 - Oct 2023
            </p>
          </div>
        </div>

        {/* Experience 4 */}
        <div className="flex justify-between border-b-[1px] border-[#fff] pb-4">
          <div>
            <h3 className="text-[32px] font-[500] syne">Frontend Developer</h3>
          </div>
          <div className="text-right">
            <p className="font-[600] text-[24px] syne">OpacityAuthor</p>
            <p className="text-[#ffff] text-[16px] font-[400] poppins">
              Mar 2022 - Oct 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";

const Question = () => {
  return (
    <div className="bg-black text-white py-20 px-10 w-full">
      {/* Section Heading */}
      <div className="flex items-center gap-2 mb-10">
        <img src="/icons/Star.png" alt="Star" className="w-6 h-6" />
        <h2 className="text-[40px] font-bold">Frequently asked questions</h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-8">
        <div>
          <h3 className="text-[32px] font-medium syne">
            What is your design process?
          </h3>
          <p className="text-gray-400 text-base mt-2 poppins">
            My design process typically involves four key phases: research,
            design, prototype, and test. In the research phase, I gather
            insights about the user and their needs. In the design phase, I
            create wireframes and visual designs that meet those needs. In the
            prototype phase, I create interactive models of the design for
            testing. In the test phase, I collect feedback from users to refine
            the design.
          </p>
        </div>

        <div>
          <h3 className="text-[32px] font-medium syne">
            What tools and software do you use for UX design?
          </h3>
        </div>

        <div>
          <h3 className="text-[32px] font-medium syne">
            How do you measure the success of your UX designs?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Question;

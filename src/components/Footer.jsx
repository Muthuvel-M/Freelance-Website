import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full py-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-[48px] font-extrabold  max-w-[610px] max-h-[80px] syne">
        LET’S TALK!
      </h1>
      <a
        href="mailto:rehanurraihan@gmail.com"
        className="text-gray-400 text-[18px] mt-2 flex items-center"
      >
        rehanurraihan@gmail.com
        <img
          src="/icons/mail-arrow.png"
          alt="Arrow"
          className="ml-2 h-[16px] w-[16px]"
        />
      </a>

      {/* Footer Bottom Section */}
      <div className="flex justify-between w-full  mt-6 text-gray-500 text-[14px] poppins">
        <span>© Rehan Raihan - 2023</span>
        <div className="flex space-x-6 syne">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

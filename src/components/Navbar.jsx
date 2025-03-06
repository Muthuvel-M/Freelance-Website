import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mt-4  px-14 syne">
      <div className=" ">
        <img src="/icons/logo.png" />
      </div>
      <div className="space-x-6 hidden md:flex text-[16px]">
        <button className="px-[24px] py-[8px] rounded-full hover:bg-white hover:text-black transition">
          Home
        </button>
        <button className="px-[24px] py-[8px] rounded-full hover:bg-white hover:text-black transition">
          About
        </button>
        <button className="px-[24px] py-[8px] rounded-full hover:bg-white hover:text-black transition">
          Projects
        </button>
        <button className="px-[24px] py-[8px] rounded-full hover:bg-white hover:text-black transition">
          Contact
        </button>
      </div>
      <button className="border border-white px-4 py-2 rounded-full">
        HIRE ME
      </button>
    </nav>
  );
};

export default Navbar;

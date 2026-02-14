import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="text-3xl flex justify-between text-amber-50 items-center pl-20 pt-10 pb-10 bg-gray-950 italic font-serif">
      Ujjwal Kumar
      <div className="flex justify-between pr-10 gap-7 ">
        <BiLogoGmail />
        <FaGithub />
        <FaLinkedin />
        <button className="text-2xl outline-2 outline-offset-2 outline-cyan-500 rounded-full font-serif text-center px-3 py-1">
          Resume
        </button>
        <MdLightMode onClick={toggleDarkMode} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

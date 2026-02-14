import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-5xl flex justify-between items-center pl-20 pt-10 pb-10 bg-amber-200 italic">
      Ujjwal Kumar
      <div className="flex justify-between pr-20 gap-7 ">
        <BiLogoGmail />
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Header;

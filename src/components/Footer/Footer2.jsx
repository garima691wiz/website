import distinctLogo from "../../assets/distinct.gif";
import indFlag from "../../assets/india.png";
import LanguageIcon from "@mui/icons-material/Language";

const Footer2 = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0b0b0b] to-[#1c1c1c]">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between py-6 px-4 sm:px-10">
        {/* Logo Section */}
        <div>
          <img
            className="w-[100px] h-auto duration-100 hover:outline hover:outline-1 hover:outline-gray-400 hover:outline-offset-8"
            src={distinctLogo}
            alt="Distinct Logo"
          />
        </div>

        {/* Language Section */}
        <div className="flex gap-4 items-center mt-4 sm:mt-0">
          <div className="flex gap-2 items-center justify-center border border-gray-500 hover:border-yellow-400 cursor-pointer duration-200 px-4 py-2 rounded-md">
            <LanguageIcon className="text-white" />
            <p className="text-white">English</p>
          </div>

          {/* Country/Region Section */}
          <div className="flex gap-2 items-center justify-center border border-gray-500 hover:border-yellow-400 cursor-pointer duration-200 px-4 py-2 rounded-md">
            <img className="w-6" src={indFlag} alt="India Flag" />
            <p className="text-white">India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

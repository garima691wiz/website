import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";
import { useState } from "react";

const Navbar2 = () => {
  const [sideNavStatus, setSideNavStatus] = useState(false);

  // Toggle the side navigation panel
  const toggleSideNav = () => {
    setSideNavStatus(!sideNavStatus);
  };

  return (
    <div>
      {/* Navbar Top Section */}
      <div className="w-full h-[35px] bg-slate-900 flex items-center">
        <ul className="flex items-center tracking-wide text-white gap-2 pt-1 px-2">
          <li
            className="flex items-center gap-1 px-2 cursor-pointer duration-150 hover:outline hover:outline-1 hover:outline-gray-400 hover:outline-offset-0"
            onClick={toggleSideNav}
          >
            <MenuIcon />
            All
          </li>
        </ul>
      </div>

      {/* Backdrop when SideNav is open */}
      {sideNavStatus && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity duration-300 ease-in-out"
          onClick={toggleSideNav}
        ></div>
      )}

      {/* Side Navigation Drawer */}
      <SideNav isOpen={sideNavStatus} toggleSideNav={toggleSideNav} />

      {/* Main content blurs when side nav is open */}
      <div className={`main-content transition duration-300 ease-in-out ${sideNavStatus ? "blur-sm" : ""}`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Navbar2;

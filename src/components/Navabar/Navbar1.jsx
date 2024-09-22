import React, { useState } from "react";
import distinctLogo from "../../assets/distinct.gif"; // Use the distinct logo image
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/distinctSlice";

const Navbar1 = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const products = useSelector((state) => state.distinctReducer.products);
  const userInfo = useSelector((state) => state.distinctReducer.userInfo);

  const handleSearch = () => {
    dispatch(setSearchTerm(searchInput));
  };

  return (
    <nav className="w-full h-[80px] bg-gradient-to-r from-[#0b0b0b] to-[#1c1c1c] flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={distinctLogo}
          alt="distinct-logo"
          className="h-12 w-auto transform hover:scale-105 transition duration-300"
        />
      </Link>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-[500px] relative">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full p-3 pl-5 rounded-full bg-[#2a2a2a] text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-[#f1c40f] transition duration-300"
          placeholder="Search for products..."
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 bg-[#f1c40f] p-3 rounded-full hover:bg-[#d4a017] transition duration-300 shadow-md"
        >
          <SearchIcon className="text-black" />
        </button>
      </div>

      {/* User Info and Cart */}
      <div className="flex items-center gap-8 text-white">
        {/* User Info */}
        <Link
          to="/signin"
          className="flex items-center hover:text-[#f1c40f] transition duration-300"
        >
          <p className="text-sm font-medium tracking-wide">
            Hello, {userInfo?.data?.user?.name || "Sign in"}
          </p>
        </Link>

        {/* Orders */}
        <Link
          to="/order"
          className="text-sm font-medium tracking-wide hover:text-[#f1c40f] transition duration-300"
        >
          Orders
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center hover:text-[#f1c40f] transition duration-300">
          <CartIcon className="text-3xl" />
          <span className="absolute top-[-6px] left-[18px] text-xs bg-[#f1c40f] text-black rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            {products.length > 0 ? products.length : 0}
          </span>
          <p className="ml-2 text-sm font-medium tracking-wide">Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar1;

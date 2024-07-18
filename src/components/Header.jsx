import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-aqua-400 to-blue-500 text-white px-4 py-2 rounded-md ">
          is hiring{" "}
        </button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  );
};

export default Header;

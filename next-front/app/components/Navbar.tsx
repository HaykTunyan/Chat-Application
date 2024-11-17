import React, { FC } from "react";

interface NavbarProps {
  onStopAi: () => void;
}

const Navbar: FC<NavbarProps> = ({ onStopAi }) => {
  /**
   * Navbar Component
   *
   * @param {function} props.onStopAi - Function  to call when a stop Chat AI 
   *
   */

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">AI Chat App</h1>
      <button
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
        onClick={onStopAi}
      >
        Stop AI
      </button>
    </header>
  );
};

export default Navbar;

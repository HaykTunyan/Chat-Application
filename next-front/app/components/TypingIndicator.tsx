import React, { FC } from "react";

interface TypingIndicatorProps {
  name: string;
}

const TypingIndicator: FC<TypingIndicatorProps> = ({ name }) => {
  /**
   * TypingIndicator Component
   *
   * @param {string} name - The name of the user
   */

  return (
    <div className="p-4">
      {name === "user" ? (
        <div className="flex justify-end items-center space-x-1 ">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-75"></span>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></span>
        </div>
      ) : name === "ai" ? (
        <div className="flex justify-start items-center space-x-1 ">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-75"></span>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-150"></span>
        </div>
      ) : null}
    </div>
  );
};

export default TypingIndicator;

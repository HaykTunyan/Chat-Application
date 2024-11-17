import React, { FC } from "react";

interface Chat {
  text: string;
  sender: string;
}

interface LeftSideProps {
  chats: any[];
  handleRefresh: () => void;
  selectedChat: number;
}

const LeftSide: FC<LeftSideProps> = ({
  chats,
  selectedChat,
  handleRefresh,
}) => {
  /**
   *
   * LeftSide Component
   *
   */

  return (
    <aside className="hidden md:block  w-1/4 bg-blue-600 p-4 overflow-y-auto">
      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-lg font-bold text-white ">Chat History</h2>
        <div className="">
          <button
            onClick={handleRefresh}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            🔄 Refresh
          </button>
        </div>
      </div>

      {chats?.length && (
        <ul className="space-y-5 h-[600px] overflow-y-auto">
          {chats.map((chat, index) => (
            <li
              key={index}
              className={`p-3 bg-white rounded shadow-sm cursor-pointer transition-all ${
                selectedChat === index
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300 text-black"
              }`}
              // Uncomment the following line if you want to enable selection
              // onClick={() => onSelect(index)}
            >
              {/* User Message */}
              <div className="flex items-center justify-between">
                <span className="font-semibold">User</span>
                <span className="text-sm text-gray-500">
                  Message {index + 1}
                </span>
              </div>
              <div className="pt-2">
                <p className="truncate text-xs font-normal">
                  {chat.user_input}
                </p>
              </div>

              {/* AI Response */}
              <div className="flex items-center justify-between pt-4">
                <span className="font-semibold">AI</span>
              </div>
              <div className="pt-2">
                <p className="truncate text-xs font-normal">
                  {chat.gemini_response}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default LeftSide;

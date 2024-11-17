import React, { FC } from "react";

interface ChatHistoryProps {
  onSelect: (chatId: string) => void;
  chats: any[];
}

const ChatHistory: FC<ChatHistoryProps> = ({ chats, onSelect }) => {
  /**
   * ChatHistory Component
   *
   * @param {ChatHistoryProps} props - Component props.
   * @param {string[]} props.chats - Array of chat IDs representing previous sessions.
   * @param {function} props.onSelect - Function to call when a chat ID is selected.
   *
   */

  return (
    <div className="border-r p-4 h-full w-64 overflow-y-auto">
      <h3 className="font-bold text-lg mb-4">Chat History</h3>
      <ul className="space-y-2">
        {chats.map((chatId : any ) => (
          <li
            key={chatId}
            className="cursor-pointer p-2 rounded hover:bg-gray-200 transition"
            onClick={() => onSelect(chatId)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(chatId);
            }}
          >
            {chatId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;

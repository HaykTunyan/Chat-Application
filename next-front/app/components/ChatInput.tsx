import React, { ChangeEvent, KeyboardEvent } from "react";

interface ChatInputProps {
  keyType: (type: string) => void; // Function to set the key type
  onSend: (message: string) => void; // Function to send the message
  chatSetInput: (value: string) => void; // Function to update the input value
  chatInput: string; // Current input value
}

const ChatInput: React.FC<ChatInputProps> = ({
  keyType,
  onSend,
  chatSetInput,
  chatInput,
}) => {
  /**
   * Handles the change event for the textarea.
   */
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    chatSetInput(e.target.value);
  };

  /**
   * Handles sending a message when the send button is clicked or Enter is pressed.
   */
  const handleSend = () => {
    if (chatInput.trim()) {
      onSend(chatInput.trim());
      chatSetInput(""); // Clear the input field after sending
    }
  };

  /**
   * Handles the key press event for the textarea.
   */
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    keyType("user"); // Trigger the keyType with "user"

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent adding a newline
      handleSend();
    }
  };

  const handleClear = () => {
    chatSetInput("");
    keyType("");
  };

  return (
    <div className="flex items-center gap-y-9 gap-2 p-4 border-t w-full">
      {/* Textarea for typing messages */}
      <div className="w-10/12 ">
        /
        <textarea
          className="border rounded-lg p-2 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Type your message..."
          value={chatInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>

      {/* Send and Clear Buttons */}
      <button
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        onClick={handleSend}
        disabled={!chatInput.trim()} // Disable the button if the input is empty
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10l9-9m0 0l9 9M12 1v16.5M4.5 20.5H19.5"
          />
        </svg>
        Send
      </button>

      <button
        className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        onClick={handleClear}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 12H6m6-6v12"
          />
        </svg>
        Clear
      </button>
    </div>
  );
};

export default ChatInput;

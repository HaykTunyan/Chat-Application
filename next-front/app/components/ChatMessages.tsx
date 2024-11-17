import React, { FC, useEffect } from "react";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface ChatMessagesProps {
  messages: any[];
  userMessages: any;
}

const ChatMessages: FC<ChatMessagesProps> = ({ messages, userMessages }) => {
  /**
   * ChatMessages Component
   *
   * @param {ChatMessagesProps} props - Component props.
   * @param {Message[]} props.messages - List of messages to display.
   *
   */


  useEffect( () => {
    if(messages) {
      
    }
  },[])


  return (
    <div className="flex-1  p-4 space-y-4 ">
      <div className=" max-w-md mx-auto">
        <p className="text-xl font-semibold text-gray-800 tracking-wide text-center">
          Text Conversations for AI
        </p>
      </div>

      <div>
        {userMessages.map(
          (
            list: {
              sender: string;
              text:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
            },
            index: React.Key | null | undefined
          ) => (
            <div
              className={`${
                list.sender === "ai" ? "text-left" : "text-right"
              }  py-2 `}
              key={index}
            >
              {list.sender === "ai" ? (
                <div className="flex justify-start">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.7 0 6 2.7 6 6V18C6 21.3 8.7 24 12 24C15.3 24 18 21.3 18 18V6C18 2.7 15.3 0 12 0ZM12 2C13.7 2 15 3.3 15 5V7H9V5C9 3.3 10.3 2 12 2ZM8 10H16V18C16 19.1 15.1 20 14 20H10C8.9 20 8 19.1 8 18V10ZM10 14H14V16H10V14Z" />
                  </svg>
                </div>
              ) : (
                <div className="flex justify-end">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c4.42 0 8 2.239 8 5v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1c0-2.761 3.58-5 8-5z" />
                  </svg>
                </div>
              )}

              <div
                className={`text-white p-2 rounded inline-block  ${
                  list.sender === "ai" ? "bg-red-600" : "bg-blue-500"
                }  `}
              >
                <p
                  className={` ${
                    list.sender === "ai" ? "text-white" : "text-white"
                  }`}
                >
                  {list.text}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChatMessages;

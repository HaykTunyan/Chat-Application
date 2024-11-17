"use client";

import React, { FC, useEffect, useLayoutEffect, useState } from "react";
// import Image from "next/image";
// import Navbar from "@/app/components/Navbar";
import TypingIndicator from "@/app/components/TypingIndicator";
import LeftSide from "@/app/components/LeftSide";
import ChatMessages from "@/app/components/ChatMessages";
import ChatInput from "@/app/components/ChatInput";
import { fetchChatHistory } from "@/app/services/chatHistoryService";

import { sendInputToGemini } from "@/app/services/getFIrstService";

interface ChatMessage {
  text: string;
  sender: "user" | "ai";
}

interface ChatViewProps {
  type: string;
  setType: (type: string) => void;
}

const ChatView: FC<ChatViewProps> = ({ type, setType }) => {
  /**
   * Chat View Component
   *
   */

  const [input, setInput] = useState<string>("");
  const [historyInfo, setHistoryInfo] = useState<any | null>(null);
  const [aiMessages, setAIMessages] = useState<string | null>(null);

  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [userMessages, setUserMessages] = useState<any | []>([]);

  const handleSendMessages = async (message: string) => {
    if (message.trim()) {
      setUserMessages((prevMessages: any) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);

      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { text: message, sender: "user" },
      // ]);
      setType("");
      // setInput("");

      try {
        setType("ai");
        const response = await sendInputToGemini(message);
        // @ts-ignore
        if (response?.message) {
          // @ts-ignore
          const info = response?.message;

          setUserMessages((prevMessages: any) => [
            ...prevMessages,
            { text: info, sender: "ai" },
          ]);

          setType("");
        }
      } catch (error) {
      } finally {
      }
    }
    if (aiMessages) {
    }
  };

  const handleRefresh = async () => {
    const response = await fetchChatHistory();
    setHistoryInfo(response);
  };

  // useEffect(() => {
  //   setType(input ? "user" : "");
  // }, [input]);

  useLayoutEffect(() => {
    const getHistory = async () => {
      const response = await fetchChatHistory();
      setHistoryInfo(response);
    };
    getHistory();
  }, [input]);
  return (
    <div className="flex flex-1">
      {/* Chat History Sidebar */}

      <LeftSide
        chats={historyInfo}
        handleRefresh={handleRefresh}
        selectedChat={selectedChat!}
      />

      {/* Chat Area */}
      <div className="flex flex-col flex-1 bg-white">
        {/* Chat Messages */}

        <ChatMessages messages={messages} userMessages={userMessages} />

        {/* Typing Indicator */}

        <TypingIndicator name={type} />

        {/* Chat Input */}

        <ChatInput
          keyType={setType as any}
          chatInput={input}
          chatSetInput={setInput}
          onSend={handleSendMessages}
        />
      </div>
    </div>
  );
};

export default ChatView;

"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatView from "./container/chatView/indxe";

export default function Home() {
  const [hometype, setHomeType] = useState<string | "">("");

  const handleStopAI = () => {
    setHomeType("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar onStopAi={handleStopAI} />
      {/* Chat View */}

      <ChatView type={hometype} setType={setHomeType} />
    </div>
  );
}

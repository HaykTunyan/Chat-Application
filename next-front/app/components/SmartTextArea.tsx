"use client";

import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import clsx from "clsx";

interface SmartTextAreaProps {
  onSendMessage?: (message: string) => void;
}

const SmartTextArea: React.FC<SmartTextAreaProps> = ({ onSendMessage }) => {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
      }),
    ],
    content: "",
    autofocus: true,
    editable: true,
  });

  const handleSend = () => {
    const message = editor?.getHTML();
    if (message?.trim() === "<p></p>") return; // Avoid empty messages

    const newMessage = { id: Date.now(), content: message || "" };
    setMessages((prev) => [...prev, newMessage]);
    onSendMessage?.(message || "");
    editor?.commands.clearContent();
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 rounded-md shadow-md">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-md shadow p-2 mb-2 text-gray-800"
              dangerouslySetInnerHTML={{ __html: msg.content }}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No messages yet.</p>
        )}
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-300 p-3 bg-white">
        <div
          className={clsx(
            "rounded-md border focus-within:ring focus-within:ring-blue-500 p-2",
            "min-h-[100px] overflow-hidden"
          )}
        >
          <EditorContent editor={editor} className="prose" />
        </div>
        <button
          onClick={handleSend}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          disabled={!editor || editor.isEmpty}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SmartTextArea;

'use client'; // for Next.js 13+ app router

import { useState } from "react";
import Link from 'next/link';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Anna Smith",
      text: "Good job!",
      time: "16 March 18:43:48",
      image: null,
    },
    {
      id: 2,
      name: "Anna Smith",
      text: null,
      time: "16 March 18:43:57",
      image: "/images/mathpaper.png",
    }
  ]);

  const handleSendMessage = (newMessageText) => {
    const newMessage = {
      id: messages.length + 1,
      name: "You", // you can replace with dynamic user name
      text: newMessageText,
      time: new Date().toLocaleString(),
      image: null,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-100">
      <div className="flex justify-between items-center p-4 border-b bg-white">
        <h2 className="text-lg font-semibold text-blue-950">📐 Math channel</h2>
        <Link href="/courses">
          <button className="bg-blue-500 text-white px-4 py-1 rounded">
            To new courses
          </button>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex space-x-3">
            <img className="w-10 h-10 rounded-full" src="/images/user.jpeg" alt="user" />
            <div>
              <p className="text-sm font-bold text-black">{msg.name}</p>
              {msg.text && <p className="text-sm text-gray-700">{msg.text}</p>}
              {msg.image && <img className="w-32" src={msg.image} alt="Uploaded" />}
              <p className="text-xs text-gray-400">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

// ChatInput component inside the same file
const ChatInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-3 border-t bg-white text-black">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message"
        className="flex-1 border rounded p-2 mr-2"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
};

export default ChatWindow;

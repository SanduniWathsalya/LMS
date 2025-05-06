import { useState } from "react";

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

export default ChatInput;

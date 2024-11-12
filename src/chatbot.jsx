import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {Button} from "./components/ui/button.jsx";
import {Card} from "./components/ui/card.jsx";
import {Input} from "./components/ui/input.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import ChatHistory from "./components/ChatHistory";
import Loading from "./components/loading";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const toggleChat = () => setIsOpen(!isOpen);
    const handleUserInput = (e) => setUserInput(e.target.value);
  
    const sendMessage = async () => {
      if (userInput.trim() === "") return;
  
      setIsLoading(true);
      try {
        const result = await model.generateContent(userInput);
        const response = await result.response;
        setChatHistory([
          ...chatHistory,
          { type: "user", message: userInput },
          { type: "bot", message: response.text() },
        ]);
      } catch {
        console.error("Error sending message");
      } finally {
        setUserInput("");
        setIsLoading(false);
      }
    };
  
    return (
      <div className="fixed bottom-4 right-4">
        {/* Chat Icon with Flight Icon */}
        <Button
  onClick={toggleChat}
  className="p-8 bg-black text-white rounded-full shadow-2xl hover:bg-gray-800 focus:outline-none relative"
>
  <FontAwesomeIcon icon={faPlaneDeparture} className="text-6xl" /> {/* Even Larger Icon */}

  {/* Larger Dot */}
  <span className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
    1
  </span> 
</Button>
  
        {/* Expandable Chat Window */}
        {isOpen && (
          <div className="w-1/2 max-w-md h-3/4 fixed bottom-16 right-4 bg-white text-black rounded-lg shadow-lg p-4 overflow-hidden flex flex-col">
         
            <h1 className="text-xl font-bold mb-2">Ask Your Trevel Related Queries ✈️</h1>
  
            <div className="flex-grow overflow-y-auto mb-2 border-t border-gray-200 pt-2">
              <ChatHistory chatHistory={chatHistory} />
              <Loading isLoading={isLoading} />
            </div>
  
            <div className="flex mt-2">
              <Input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                placeholder="Type a message..."
              />
              <Button
                onClick={sendMessage}
                className="ml-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
              >
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  
export default Chatbot;

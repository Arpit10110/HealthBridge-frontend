import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../Styles/SmartAi.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SmartAi = () => {
  const Api_Key = "AIzaSyDcqxdqDPTmeIfi6T4er3dkQUsOZsIM0uU";
  const genAI = new GoogleGenerativeAI(Api_Key);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [UserText, SetUserText] = useState("");
  const [AIText, SetAiText] = useState("");

  const result = async (prompt) => {
    SetUserText("");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text(); 
    addAiChat(text);
  };

  const addUserChat = async () => {
    const allchats = document.querySelector(".allchats");
    const userchat = document.createElement("div");
    const h2 = document.createElement("h2");
    userchat.classList.add("user-chat");
    h2.innerHTML = UserText;
    userchat.appendChild(h2);
    allchats.appendChild(userchat);
    scrollToBottom();
    await result(UserText);
  };
  
  function scrollToBottom() {
    const messageArea =document.querySelector(".allchats");
    messageArea.scrollTop = messageArea.scrollHeight;
  }
  const addAiChat = (text) => {
    const allchats = document.querySelector(".allchats");
    const aichat = document.createElement("div");
    const h2 = document.createElement("h2");
    aichat.classList.add("ai-chat");
    console.log(text);
    h2.innerHTML = text;
    aichat.appendChild(h2);
    allchats.appendChild(aichat);
    scrollToBottom();
  };

  return (
    <>
      <Navbar />
      <div className="ai-main">
        <div className="ai-chatbox">
          <div className="allchats">
            <div className="ai-chat">
              <h2>Hello, how can I help you?</h2>
            </div>
          </div>
          <div className="input-div">
          <input
            type="text" value={UserText}
            placeholder="Ask anything!!!!"
            onChange={(e) => {
              SetUserText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addUserChat();
              }
            }}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartAi;

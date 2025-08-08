"use client";
import React, { useContext, useState } from "react";
import { ArrowRight } from "lucide-react";
import { MessagesContext } from "context/MessagesContext";
import Colors from "data/Colors";
import Lookup from "data/Lookup";

const Hero = () => {
  const [userInput, setUserInput] = useState("");
  const { messages, setMessages } = useContext(MessagesContext);

  const onGenerate = (input) => {
    if (!input.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: input,
      },
    ]);
    setUserInput(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-2">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-gray-500 font-medium">{Lookup.HERO_DESC}</p>

      <div
        className="p-5 border rounded-2xl max-w-xl w-full mt-3"
        style={{ backgroundColor: Colors.BACKGROUND }}
      >
        <div className="flex gap-2">
          <textarea
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className="outline-none bg-transparent w-full max-h-56 h-32 resize-none"
            placeholder={Lookup.INPUT_PLACEHOLDER}
          />
          {userInput && (
            <ArrowRight
              className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer"
              onClick={() => onGenerate(userInput)}
            />
          )}
        </div>
      </div>

      <div className="flex mt-5 flex-wrap max-w-2xl items-center justify-center gap-2">
        {Lookup?.SUGGSTIONS.map((suggestion, index) => (
          <h2
            key={index}
            className="p-1 px-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer"
            onClick={() => onGenerate(suggestion)}
          >
            {suggestion}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Hero;

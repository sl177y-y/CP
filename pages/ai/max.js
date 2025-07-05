import React from "react";
import AiModelGen from "@/components/AiModelGen";
import { LuComputer, LuImage, LuLoader2, LuPlay, LuShare, LuSparkles, LuTextCursorInput, LuGlobe2, LuCpu, LuActivity, LuHome, LuHash, LuListOrdered } from "react-icons/lu";

const AiArena = () => {
  const botData = {
    name: "Max Bot",
    description: "An AI Model that allows you to ask questions from the given image.",
    avatar:"max.png",
    stats: [
      { label: "Public", icon: LuGlobe2, color: "#81bf81" },
      { label: "1k+ Runs", icon: LuActivity, color: "#ffa59e" },
      { label: "Nvidia™ A40 (Large)", icon: LuCpu, color: "white" }
    ],
    cost: "$0.000725",
    hardware: "Nvidia™ A40 (Large)",
    outputTime: "5s",
    apiEndpoint: "/api/ai_max",
    inputFields: [
      { id: "image", label: "image_url", type: "image", datatype:"String" },
      { id: "prompt", label:"prompt", type:"text", datatype:"String" },
      { id: "max_tokens", label:"max_tokens", type:"number", datatype:"integer" },
      { id: "temperature", label:"temperature", type:"number", datatype:"integer" },

    ],
    outputField: {
      type: "text"
    }
  };

  return (
    <div>
      <h1>Ai Arena</h1>
      <AiModelGen botData={botData} />
    </div>
  );
};

export default AiArena;

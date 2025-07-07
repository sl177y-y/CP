import React from "react";
import AiModelGen from "@/components/AiModelGen";
import { LuComputer, LuImage, LuLoader, LuPlay, LuShare, LuSparkles, LuTextCursorInput, LuGlobe, LuCpu, LuActivity, LuHouse, LuHash, LuListOrdered } from "react-icons/lu";

const AiArena = () => {
  const botData = {
    name: "Stacy Bot",
    description: "An OCR Model that can extract text from an image quickly.",
    avatar:"stacy.png",
    stats: [
      { label: "Public", icon: LuGlobe, color: "#81bf81" },
      { label: "3k+ Runs", icon: LuActivity, color: "#ffa59e" },
      { label: "CPU", icon: LuCpu, color: "white" }
    ],
    cost: "$0.0001",
    hardware: "CPU",
    outputTime: "5s",
    apiEndpoint: "/api/ai_stacy",
    inputFields: [
      { id: "image", label: "image_url", type: "image", datatype:"String" },
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

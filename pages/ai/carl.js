import React from "react";
import AiModelGen from "@/components/AiModelGen";
import { LuComputer, LuImage, LuLoader2, LuPlay, LuShare, LuSparkles, LuTextCursorInput, LuGlobe2, LuCpu, LuActivity, LuHome, LuHash, LuListOrdered } from "react-icons/lu";

const AiArena = () => {
  const botData = {
    name: "Carl Bot",
    description: "A Text-to-image diffusion model that can generate images by taking the input and also negative prompt that needs to be excluded.",
    avatar:"carl.png",
    stats: [
      { label: "Public", icon: LuGlobe2, color: "#81bf81" },
      { label: "1k+ Runs", icon: LuActivity, color: "#ffa59e" },
      { label: "Nvidia™ A100", icon: LuCpu, color: "white" }
    ],
    cost: "$0.01",
    hardware: "Nvidia™ A100 (80GB)",
    outputTime: "16s",
    apiEndpoint: "/api/ai_carl",
    inputFields: [
      { id: "prompt", label: "prompt", datatype:"string", type: "text" },
      { id: "negative_prompt", label: "negative_prompt", datatype:"string",type: "text" },

    ],
    outputField: {
      type: "image"
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

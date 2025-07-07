import React from "react";
import AiModelGen from "@/components/AiModelGen";
import { LuComputer, LuImage, LuLoader2, LuPlay, LuShare, LuSparkles, LuTextCursorInput, LuGlobe2, LuCpu, LuActivity, LuHome, LuHash, LuListOrdered } from "react-icons/lu";

const AiArena = () => {
  const botData = {
    name: "Jeniffer Bot",
    description: "A Image-to-image model that can turn faces from images into different Art Styles like 3D, Pixels, clay, etc",
    avatar:"jeniffer.png",
    stats: [
      { label: "Public", icon: LuGlobe2, color: "#81bf81" },
      { label: "5k+ Runs", icon: LuActivity, color: "#ffa59e" },
      { label: "Nvidia™ A40 (Large)", icon: LuCpu, color: "white" }
    ],
    cost: "$0.01",
    hardware: "Nvidia™ A40 (Large)",
    outputTime: "12s",
    apiEndpoint: "/api/ai_jeniffer",
    inputFields: [
      { id: "image", label: "image_url", type: "image", datatype:"String" },
      { id: "prompt", label: "prompt", type: "text", datatype:"String" },
      { id: "style", label: "Art Style", type: "select", options: ["Clay", "Pixels", "3D", "Emoji"] },
      { id: "negative_prompt", label: "negative prompt",datatype:"String", type: "text" },
      { id: "prompt_strength", label: "prompt magnitude", type: "number",datatype:"Integer" },
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

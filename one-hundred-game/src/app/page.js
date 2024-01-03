"use client";
import { Tooltip } from "antd";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { SettingsModal } from "./settings-modal";
import { PROMPT_OPTIONS } from "./prompt-options";

export default function Home() {
  const [state, setState] = useState();

  const [prompt, setPrompt] = useState();

  const [settings, setSettings] = useState({
    generateNumbers: true,
    generateQuestions: false,
  });

  const [settingsModal, setSettingsModal] = useState(false);

  const closeSettingsModal = () => {
    setSettingsModal(false);
    setState();
    setPrompt();
  };

  const numPromptOptions = PROMPT_OPTIONS.length;

  const generate = () => {
    if (settings.generateNumbers) {
      setState(Math.ceil(Math.random() * 100 + 1));
    }
    if (settings.generateQuestions) {
      setPrompt(PROMPT_OPTIONS[Math.floor(Math.random() * numPromptOptions)]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24 bg-sky-200 text-xl">
      <div className="flex flex-row justify-between gap-4 items-center">
        <h1 className="text-7xl font-bold text-teal-700">One to One Hundred</h1>
        <Tooltip title="Settings" onClick={() => setSettingsModal(true)}>
          <FiSettings className="size-12 hover:stroke-violet-600" />
        </Tooltip>
      </div>
      <button className="relative rounded bg-purple-500 p-4" onClick={generate}>
        Generate
      </button>
      {prompt && <h1>{prompt}</h1>}
      {state && <h1 className="text-5xl font-bold text-teal-700">{state}</h1>}
      <SettingsModal
        closeSettingsModal={closeSettingsModal}
        settings={settings}
        setSettings={setSettings}
        isOpen={settingsModal}
      />
    </main>
  );
}

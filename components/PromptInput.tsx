"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";

import { useSWR} from "swr";

function PromptInput() {
  const [input, setInput] = useState("");

  const {
    data: suggestion,
    isLoadin,
    mutate,
    isValidating,
  } = useSWR("/api/suugestion", fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });

  return (
    <div className="m-10">
      <form
        className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x"
        // action=""
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt"
          className="flex-1 p-4 outline-none rounded-md"
        ></textarea>
        <button
          type="submit"
          disabled={!input}
          className={`p-4  font-bold ${
            input
              ? "bg-violet-500 text-white transition-volors duration-200 "
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          Generte
        </button>
        <button
          type="button"
          className="p-4 bg-cyan-600 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-cyan-600 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md mg:rounded-bl-none font-bold"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;

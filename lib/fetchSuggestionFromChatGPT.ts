const fetchSuggestionFromChatGPT = () =>
  fetch("/api/suffestion", {
    cache: "no-store",
  }).then((res) => res.json());

export default fetchSuggestionFromChatGPT;

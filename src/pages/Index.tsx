import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import ChatMessage from "@/components/ChatMessage";
import TypingIndicator from "@/components/TypingIndicator";
import SuggestionChip from "@/components/SuggestionChip";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Replace with your n8n Production URL after publishing
const WEBHOOK_URL =
  "http://localhost:5678/webhook/66f8425f-f550-4c2f-a222-e6a03773496a";

// Unique session ID per browser session
const SESSION_ID = `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

const SUGGESTIONS = [
  "🎬 Suggest Telugu action movies",
  "🇰🇷 Best Korean romance movies",
  "😢 I feel sad, suggest movies",
  "🤣 Best Hindi comedy movies",
  "🎭 Top Tamil thriller movies",
  "🌍 French or Spanish movies",
  "🍿 Movies like Interstellar",
  "⭐ Best movies of 2024",
];

const LANGUAGES = [
  "Any Language",
  "Telugu",
  "Tamil",
  "Hindi",
  "Korean",
  "Japanese",
  "English",
  "Spanish",
  "French",
];

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("Any Language");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const fullMessage =
      language !== "Any Language"
        ? `${trimmed} (in ${language})`
        : trimmed;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: fullMessage,
          sessionId: SESSION_ID,
        }),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();

      const reply =
        typeof data === "string"
          ? data
          : data.output ||
            data.reply ||
            data.message ||
            data.response ||
            data.text ||
            (Array.isArray(data) && data[0]?.output) ||
            (Array.isArray(data) && data[0]?.text) ||
            JSON.stringify(data);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't reach the server right now. Please try again later! 🎬",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showWelcome = messages.length === 0 && !isLoading;

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
            🎬
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              AI Movie Assistant
            </h1>
            <p className="text-xs text-muted-foreground">
              Your personal cinema companion
            </p>
          </div>
        </div>

        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-sm border border-border rounded-lg px-3 py-2 bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </header>

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4"
      >
        {showWelcome && (
          <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
            <div className="text-6xl">🎬</div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Welcome to AI Movie Assistant
              </h2>
              <p className="text-sm text-muted-foreground max-w-md">
                Ask for movie recommendations in any language — Telugu,
                Tamil, Hindi, Korean, English and more! Tell me your mood
                or favorite genre.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg">
              {SUGGESTIONS.map((s) => (
                <SuggestionChip key={s} text={s} onClick={sendMessage} />
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {isLoading && <TypingIndicator />}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="px-4 sm:px-6 py-4 border-t border-border bg-card/80 backdrop-blur-sm"
      >
        <div className="flex gap-2 max-w-3xl mx-auto">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              language !== "Any Language"
                ? `Ask for ${language} movies...`
                : "Ask about movies in any language..."
            }
            className="flex-1 px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;

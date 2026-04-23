const TypingIndicator = () => {
  return (
    <div className="flex gap-3 justify-start">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm flex-shrink-0">
        🎬
      </div>
      <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
        <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground inline-block"></span>
        <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground inline-block"></span>
        <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground inline-block"></span>
      </div>
    </div>
  );
};

export default TypingIndicator;

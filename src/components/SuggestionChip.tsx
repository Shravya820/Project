interface SuggestionChipProps {
  text: string;
  onClick: (text: string) => void;
}

const SuggestionChip = ({ text, onClick }: SuggestionChipProps) => {
  return (
    <button
      onClick={() => onClick(text)}
      className="px-4 py-2 rounded-full text-sm border border-border bg-card text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default SuggestionChip;

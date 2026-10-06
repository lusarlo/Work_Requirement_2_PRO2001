import { useStateContext } from "../utils/useStateObject";

const seasonLabels = {
  fall: "Fall",
  summer: "Summer",
  spring: "Spring",
  winter: "Winter",
} as const;

const emojiSymbols = {
  sun: "☀️",
  beach: "🏖️",
  snowflake: "❄️",
  snowman: "⛄",
  leaf: "🍁",
  leaf2: "🍂",
  flower: "🌼",
  flower2: "🌸",
} as const;

export default function PreviewPage() {
  const [preferences] = useStateContext();

  return (
    <section
      className={`preview-page season-${preferences.season}`}
      aria-live="polite"
    >
      <h1>Welcome to {seasonLabels[preferences.season]}</h1>
      <p className="preview-emoji" aria-label={preferences.emoji}>
        {emojiSymbols[preferences.emoji]}
      </p>
    </section>
  );
}

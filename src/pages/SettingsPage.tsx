import {
  useStateContext,
  type PreferenceEmoji,
  type Season,
} from "../utils/useStateObject";

const seasons: { value: Season; label: string }[] = [
  { value: "fall", label: "Fall" },
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "winter", label: "Winter" },
];

const emojis: { value: PreferenceEmoji; label: string }[] = [
  { value: "sun", label: "☀️ Sun" },
  { value: "beach", label: "🏖️ Beach" },
  { value: "snowflake", label: "❄️ Snowflake" },
  { value: "snowman", label: "⛄ Snowman" },
  { value: "leaf", label: "🍁 Leaf" },
  { value: "leaf2", label: "🍂 Leaf 2" },
  { value: "flower", label: "🌼 Flower" },
  { value: "flower2", label: "🌸 Flower 2" },
];

export default function SettingsPage() {
  const [preferences, setPreference] = useStateContext();

  function changeSeason(value: string) {
    const season = seasons.find((option) => option.value === value);
    if (season) setPreference("season", season.value);
  }

  function changeEmoji(value: string) {
    const emoji = emojis.find((option) => option.value === value);
    if (emoji) setPreference("emoji", emoji.value);
  }

  return (
    <section className="settings-page">
      <h1>Settings</h1>
      <label className="setting">
        <span>Season</span>
        <select
          value={preferences.season}
          onChange={(event) => changeSeason(event.currentTarget.value)}
        >
          {seasons.map((season) => (
            <option key={season.value} value={season.value}>
              {season.label}
            </option>
          ))}
        </select>
      </label>

      <label className="setting">
        <span>Emoji</span>
        <select
          value={preferences.emoji}
          onChange={(event) => changeEmoji(event.currentTarget.value)}
        >
          {emojis.map((emoji) => (
            <option key={emoji.value} value={emoji.value}>
              {emoji.label}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

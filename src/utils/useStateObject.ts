import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export type Season = "winter" | "spring" | "summer" | "fall";
export type PreferenceEmoji = "sun" | "beach" | "snowflake" | "snowman" | "leaf" | "leaf2" | "flower" | "flower2";

export interface Preferences {
  season: Season;
  emoji: PreferenceEmoji;
}

export type PreferenceContext = [
  Preferences,
  (key: string, value: string) => void,
];

export function useStateObject(object: Preferences) {
  const [state, setState] = useState(object);

  function setter(key: string, value: string) {
    setState({ ...state, [key]: value });
  }

  return [state, setter];
}

export function useStateContext() {
  return useOutletContext<PreferenceContext>();
}

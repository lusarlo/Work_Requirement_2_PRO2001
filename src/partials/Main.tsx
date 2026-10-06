import { Outlet } from "react-router-dom";
import {
  useStateObject,
  type Preferences,
} from "../utils/useStateObject";

const initialPreferences: Preferences = {
  season: "fall",
  emoji: "leaf",
};

export default function Main() {
  const [preferences, setPreference] = useStateObject(initialPreferences);

  return (
    <main className="page-shell">
      <Outlet context={[preferences, setPreference]} />
    </main>
  );
}

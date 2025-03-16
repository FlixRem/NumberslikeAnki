import { WidgetLocation, RemnotePlugin } from "@remnote/plugin-sdk";
import { useEffect, useState } from "react";
import { usePlugin } from "@remnote/plugin-sdk";

export async function registerAnkiStatsWidget(plugin: RemnotePlugin) {
  await plugin.app.registerWidget("anki-stats", AnkiStatsWidget, {
    name: "Anki Stats",
    locations: [WidgetLocation.Floating], // Stellt sicher, dass das Widget sichtbar ist
  });
}

function AnkiStatsWidget() {
  const plugin = usePlugin();
  const [newCards, setNewCards] = useState(0);
  const [learningCards, setLearningCards] = useState(0);
  const [reviewCards, setReviewCards] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const stats = await plugin.settings.getSetting("daily_card_counts");
      if (stats) {
        setNewCards(stats.new_cards || 0);
        setLearningCards(stats.learning_cards || 0);
        setReviewCards(stats.review_cards || 0);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      background: "#333",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "14px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
    }}>
      <p>Neue Karten: {newCards}</p>
      <p>Lernen: {learningCards}</p>
      <p>Wiederholungen: {reviewCards}</p>
    </div>
  );
}

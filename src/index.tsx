import { renderWidget, declareIndexPlugin } from "@remnote/plugin-sdk";
import { useState } from "react";

function AnkiStatsWidget() {
  const [newCards, setNewCards] = useState(0);
  const [learningCards, setLearningCards] = useState(0);
  const [reviewCards, setReviewCards] = useState(0);

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
      <p>📘 Neue: {newCards}</p>
      <p>🟠 Lernen: {learningCards}</p>
      <p>✅ Wiederholung: {reviewCards}</p>
    </div>
  );
}

// 🔹 Plugin wird hier offiziell registriert
declareIndexPlugin(async (plugin) => {
  await plugin.app.registerWidget("anki-stats", AnkiStatsWidget, {
    widgetTab: "home",
    name: "Anki Stats",
  });
});

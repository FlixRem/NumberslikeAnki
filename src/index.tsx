import { renderWidget, useAPIEventListener, usePlugin } from "@remnote/plugin-sdk";
import { useState } from "react";

function AnkiStatsWidget() {
  const plugin = usePlugin();
  const [newCards, setNewCards] = useState(0);
  const [learningCards, setLearningCards] = useState(0);
  const [reviewCards, setReviewCards] = useState(0);

  // Holt die Statistik-Daten aus RemNote
  useAPIEventListener("remnote:daily_card_counts", (data) => {
    setNewCards(data.new_cards);
    setLearningCards(data.learning_cards);
    setReviewCards(data.review_cards);
  });

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

// Registriere das Widget im Plugin
renderWidget(AnkiStatsWidget);

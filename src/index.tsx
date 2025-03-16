import { declareIndexPlugin } from "@remnote/plugin-sdk";
import { registerAnkiStatsWidget } from "./widgets/AnkiStatsWidget";

declareIndexPlugin(async (plugin) => {
  await registerAnkiStatsWidget(plugin);
});

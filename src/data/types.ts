import { BookOpen } from "lucide-react";

export type RepertoireCategory = "philosopher" | "law" | "data" | "cinema" | "literature" | "music" | "history";

export interface Repertoire {
  category: RepertoireCategory;
  title: string;
  description: string;
  howToUse: string;
  paragraphModel: string;
}

export interface Topic {
  name: string;
  repertoires: Repertoire[];
}

export interface ThematicAxis {
  id: string;
  name: string;
  icon: typeof BookOpen;
  topics: Topic[];
}

export const categoryLabels: Record<RepertoireCategory, { label: string; emoji: string }> = {
  philosopher: { label: "Filósofos e Sociólogos", emoji: "🧠" },
  law: { label: "Leis e Documentos", emoji: "📜" },
  data: { label: "Dados e Estatísticas", emoji: "📊" },
  cinema: { label: "Cinema", emoji: "🎬" },
  literature: { label: "Literatura", emoji: "📚" },
  music: { label: "Música", emoji: "🎵" },
  history: { label: "Fatos Históricos", emoji: "🕰️" },
};

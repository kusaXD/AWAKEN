import { createContext, useContext, useState, type ReactNode } from "react";
import type { Quests, QuestContextType } from "../types/quests";
import axios from "axios";

const QuestContext = createContext<QuestContextType | null>(null);

export function QuestProvider({ children }: { children: ReactNode }) {
  const [quests, setQuests] = useState<Quests[]>([]);

  function addQuest() {
    null;
  }
  function deleteQuests() {
    null;
  }
  function updateQuests() {
    null;
  }

  return (
    <QuestContext.Provider
      value={{ quests, addQuest, deleteQuests, updateQuests }}
    >
      {children}
    </QuestContext.Provider>
  );
}

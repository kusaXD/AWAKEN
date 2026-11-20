export interface Quests {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface QuestContextType {
  quests: Quests[];
  addQuest: (quest: Quests) => void;
  deleteQuests: (quest_id: string) => void;
  updateQuests: (quest_id: string, updateQuest: Quests) => void;
}

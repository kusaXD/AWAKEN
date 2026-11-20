import React from "react";
import QuestCard from "./QuestCard";
function QuestList() {
  return (
    <div className="flex flex-col mt-10 w-full h-200 gap-2">
      <QuestCard></QuestCard>
      <QuestCard></QuestCard>
      <QuestCard></QuestCard>
    </div>
  );
}

export default QuestList;

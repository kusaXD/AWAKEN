import React from "react";

function QuestCard() {
  return (
    <div className="bg-card h-25 flex items-center rounded-2xl gradient-border px-5">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-text">title</h3>
        <p className="text-text-secondary">description</p>
      </div>
    </div>
  );
}

export default QuestCard;

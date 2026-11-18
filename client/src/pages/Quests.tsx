import React from "react";
import Aside from "../components/layout/Aside";
import Header from "../components/layout/Header";
import QuestList from "../components/quests/QuestList";
function Quests() {
  return (
    <div className="flex bgimg">
      <Aside></Aside>
      <main className=" grow w-full px-10 py-10">
        <Header></Header>
        <QuestList></QuestList>
      </main>
    </div>
  );
}

export default Quests;

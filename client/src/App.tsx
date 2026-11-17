import { useState } from "react";
import "./App.css";
import { Brain, BicepsFlexed, Heart, ShieldHalf } from "lucide-react";

import Aside from "./components/layout/Aside";

function App() {
  return (
    <div className="flex bgimg">
      <Aside></Aside>
      <main className=" grow w-full px-10 py-10">
        <div className="flex flex-row">
          <h2 className="text-text-secondary text-3xl">Добро пожаловать!</h2>

          <div className="backdrop-blur-md gradient-border flex flex-col w-200 h-50 gap-2 p-3 ml-20">
            <p className="text-text text-2xl">Ваш уровень</p>
            <h3 className="text-text font-bold text-5xl">Lv.</h3>
            <p className="text-text-secondary text-[20px]">/ EXP</p>
          </div>

          <div className="backdrop-blur-lg gradient-border flex flex-row w-full h-50 p-3 ml-10 items-center justify-around">
            <div className="flex items-center flex-col">
              <Brain size={40} className="text-intelligence mb-3"></Brain>
              <h3 className="text-[20px] text-text-secondary">ИНТЕЛЛЕКТ</h3>
              <p className="text-4xl text-text mt-1">0</p>
            </div>
            <div className="flex items-center flex-col">
              <BicepsFlexed
                size={40}
                className="text-strength mb-3"
              ></BicepsFlexed>
              <h3 className="text-[20px] text-text-secondary">СИЛА</h3>
              <p className="text-4xl text-text mt-1">0</p>
            </div>
            <div className="flex items-center flex-col">
              <ShieldHalf
                size={40}
                className="text-discipline mb-3"
              ></ShieldHalf>
              <h3 className="text-[20px] text-text-secondary">ДИСЦИПЛИНА</h3>
              <p className="text-4xl text-text mt-1">0</p>
            </div>
            <div className="flex items-center flex-col">
              <Heart size={40} className="text-health mb-3"></Heart>
              <h3 className="text-[20px] text-text-secondary">ЗДОРОВЬЕ</h3>
              <p className="text-4xl text-text mt-1">0</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10">
          <div className="row-span-2 min-h-90 backdrop-blur-3xl gradient-border"></div>

          <div className="min-h-90 backdrop-blur-3xl gradient-border"></div>

          <div className="min-h-90 backdrop-blur-3xl gradient-border"></div>
        </div>
      </main>
    </div>
  );
}

export default App;

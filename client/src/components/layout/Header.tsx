import React from "react";
import { useLocation } from "react-router";
import { Plus, Brain, BicepsFlexed, ShieldHalf, Heart } from "lucide-react";
function Header() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
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
            <ShieldHalf size={40} className="text-discipline mb-3"></ShieldHalf>
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
    );
  }

  if (location.pathname === "/quests") {
    return (
      <div className="flex flex-row items-center">
        <h2 className="text-text text-4xl font-bold">ЗАДАНИЯ</h2>

        <div className="backdrop-blur-md gradient-border flex flex-col w-100 h-40 gap-2 p-3 ml-20">
          <p className="text-text text-2xl">Активные задания</p>
          <h3 className="text-text font-bold text-5xl">0</h3>
          <p className="text-text-secondary text-[20px]">из </p>
        </div>
        <div className="bg-primary-dark text-primary-light text-2xl gap-3 h-20 flex flex-row items-center p-3 rounded-2xl ml-160">
          <Plus size={40}></Plus>
          <button>Добавить задание</button>
        </div>
      </div>
    );
  }
}

export default Header;

import React from "react";
import { NavLink } from "react-router";
import { House, BookmarkCheck } from "lucide-react";

function Aside() {
  return (
    <aside className="w-60 h-screen shrink-0 border-r backdrop-blur-xs border-white/10 px-5">
      <h2 className="text-primary text-3xl font-bold tracking-widest w-full text-center pt-10">
        AWAKEN
      </h2>
      <div className="flex flex-col mt-30 gap-5 text-2xl text-text-secondary">
        <NavLink
          to={"/"}
          end
          className={({ isActive }) =>
            `aside-button flex items-center justify-center gap-3 ${
              isActive ? "active" : ""
            }`
          }
        >
          <House size={35}></House>
          <button>Главная</button>
        </NavLink>

        <NavLink
          to={"/quests"}
          end
          className={({ isActive }) =>
            `aside-button flex items-center justify-center gap-3 ${
              isActive ? "active" : ""
            }`
          }
        >
          <BookmarkCheck size={35}></BookmarkCheck>
          <button>Задания</button>
        </NavLink>
      </div>
    </aside>
  );
}

export default Aside;

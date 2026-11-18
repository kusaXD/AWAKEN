import "./App.css";
import Header from "./components/layout/Header";

import Aside from "./components/layout/Aside";

function App() {
  return (
    <div className="flex bgimg">
      <Aside></Aside>
      <main className=" grow w-full px-10 py-10">
        <Header></Header>
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

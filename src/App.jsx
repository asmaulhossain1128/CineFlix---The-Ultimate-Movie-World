import { useState } from "react";
import HeroBG from "../public/hero.png";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src={HeroBG} alt="Hero Banner" />

          <h1>
            Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy
            Without the Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h1 className="text-2xl text-white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;

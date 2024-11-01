import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Trivia } from "./pages/Trivia";
import { Memory } from "./pages/MemoryLegacy";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/trivia" element={<Trivia />} />
      <Route path="/memory" element={<Memory />} />
    </Routes>
  );
}

export default App;

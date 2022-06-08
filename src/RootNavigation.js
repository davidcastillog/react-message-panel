import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";

function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RootNavigation;

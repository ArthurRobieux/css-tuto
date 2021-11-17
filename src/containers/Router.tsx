import { Routes, Route } from "react-router-dom";

import { Homepage } from "../modules/homepage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

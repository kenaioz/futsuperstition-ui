import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { NewGame } from "../pages/NewGame";
import { EditGame } from "../pages/EditGame";
import { Settings } from "../pages/Settings";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new" element={<NewGame />} />
      <Route path="/edit/:id" element={<EditGame />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

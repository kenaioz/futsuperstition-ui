import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";

export function Routes() {
  // prettier-ignore
  return (
    <BrowserRouter>
      <AppRoutes />                                 
    </BrowserRouter>
  )
}

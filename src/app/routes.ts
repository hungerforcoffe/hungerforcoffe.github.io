import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/success",
    Component: Success,
  },
]);

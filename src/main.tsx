import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import GetCampusFromText from "./data/courses/scripts/getCampusFromText";

const App = lazy(() => import("./pages/App/App"));
const List = lazy(() => import("./pages/List/List"));
const Help = lazy(() => import("./pages/Help/Help"));
const HowUse = lazy(() => import("./pages/HowUse/HowUse"));
const About = lazy(() => import("./pages/About/About"));
const Novelty = lazy(() => import("./pages/Novelty/Novelty"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <List></List>
      </Suspense>
    ),
  },
  {
    path: "/:period",
    element: (
      <Suspense fallback={<></>}>
        <App></App>
      </Suspense>
    ),
  },
  {
    path: "/help",
    element: (
      <Suspense fallback={<></>}>
        <Help></Help>
      </Suspense>
    ),
  },
  {
    path: "/como-usar",
    element: (
      <Suspense fallback={<></>}>
        <HowUse></HowUse>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<></>}>
        <About></About>
      </Suspense>
    ),
  },
  {
    path: "/novelty",
    element: (
      <Suspense fallback={<></>}>
        <Novelty></Novelty>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<></>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
  <RouterProvider router={router} />
  </>
);

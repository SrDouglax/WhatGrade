import './index.scss';

import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import GetCampusFromText from "./data/courses/scripts/getCampusFromText";
// import GenData from "./pages/CourseInfo/scripts/dataGenerator";

const CalcSSA = lazy(() => import("./pages/CalcSSA/CalcSSA"));
const Help = lazy(() => import("./pages/Help/Help"));
// const HowUse = lazy(() => import("./pages/HowUse/HowUse"));
// const About = lazy(() => import("./pages/About/About"));
const Novelty = lazy(() => import("./pages/Novelty/Novelty"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const CourseInfo = lazy(() => import("./pages/CourseInfo/CourseInfo"));
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Home = lazy(() => import("./pages/Home/Home"));
const Chats = lazy(() => import("./pages/Chats/Chats"));
const Chat = lazy(() => import("./pages/Chats/Chat/Chat"));
const Calculators = lazy(() => import("./pages/Calculators/Calculators"));
const Politics = lazy(() => import("./pages/Politics/Politics"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <Welcome></Welcome>
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<></>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/calculadoras",
    element: (
      <Suspense fallback={<></>}>
        <Calculators />
      </Suspense>
    ),
  },
  {
    path: "/c/ssa",
    element: (
      <Suspense fallback={<></>}>
        <CalcSSA></CalcSSA>
      </Suspense>
    ),
  },
  {
    path: "/chats",
    element: (
      <Suspense fallback={<></>}>
        <Chats />
      </Suspense>
    ),
  },
  {
    path: "/chat/:channelID",
    element: (
      <Suspense fallback={<></>}>
        <Chat />
      </Suspense>
    ),
  },
  {
    path: "c/ssa/:campus/:course",
    element: (
      <Suspense fallback={<></>}>
        <CourseInfo />
      </Suspense>
    ),
  },
  {
    path: "/ajuda",
    element: (
      <Suspense fallback={<></>}>
        <Help></Help>
      </Suspense>
    ),
  },
  {
    path: "/politicas",
    element: (
      <Suspense fallback={<></>}>
        <Politics></Politics>
      </Suspense>
    ),
  },
  // {
  //   path: "/about",
  //   element: (
  //     <Suspense fallback={<></>}>
  //       <About></About>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/como-usar",
  //   element: (
  //     <Suspense fallback={<></>}>
  //       <HowUse></HowUse>
  //     </Suspense>
  //   ),
  // },
  {
    path: "/feedback",
    element: (
      <Suspense fallback={<></>}>
        <Novelty />
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
    {/* <GenData /> */}
  </>
);

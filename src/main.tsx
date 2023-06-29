import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

const CalcSSA = lazy(() => import("./pages/CalcSSA/CalcSSA"));
const Help = lazy(() => import("./pages/Help/Help"));
const Novelty = lazy(() => import("./pages/Novelty/Novelty"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const CourseInfo = lazy(() => import("./pages/CourseInfo/CourseInfo"));
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Home = lazy(() => import("./pages/Home/Home"));
const Chats = lazy(() => import("./pages/Chats/Chats"));
const Chat = lazy(() => import("./pages/Chats/Chat/Chat"));
const Calculators = lazy(() => import("./pages/Calculators/Calculators"));
const Politics = lazy(() => import("./pages/Politics/Politics"));
const ExeptionSSA = lazy(() => import("./pages/ExeptionSSA/ExeptionSSA"));
// const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Welcome} />
          <Route path="/calculadoras" Component={Calculators} />
          <Route path="/c/ssa" Component={CalcSSA} />
          <Route path="/chats" Component={Chats} />
          <Route path="/chat/:channelID" Component={Chat} />
          <Route path="/c/ssa/:campus/:course" Component={CourseInfo} />
          <Route path="/isentos2023/:stage" Component={ExeptionSSA} />
          <Route path="/ajuda" Component={Help} />
          <Route path="/politicas" Component={Politics} />
          <Route path="/feedback" Component={Novelty} />
          <Route Component={NotFound} />
        </Routes>
      </Suspense>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);

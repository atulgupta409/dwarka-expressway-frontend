import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import { Suspense, lazy } from "react";

const NewLaunchProjects = lazy(() =>
  import("./components/new-launch-projects/NewLaunchProjects")
);
const BestProjects = lazy(() =>
  import("./components/best-projects/BestProjects")
);

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={[<Navbar key={1} />, <Homepage key={2} />]}
          />
          <Route
            path="/new-launch-projects"
            element={[<Navbar key={4} />, <NewLaunchProjects key={5} />]}
          />
          <Route
            path="/best-projects"
            element={[<Navbar key={7} />, <BestProjects key={8} />]}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

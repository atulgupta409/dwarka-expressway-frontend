import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import { Suspense, lazy } from "react";
import PropertyDetails from "./components/property-details/PropertyDetails";

const NewLaunchProjects = lazy(() =>
  import("./components/new-launch-projects/NewLaunchProjects")
);
const BestProjects = lazy(() =>
  import("./components/best-projects/BestProjects")
);
const Contact = lazy(() => import("./components/contact/Contact"));
const ImageGallery = lazy(() =>
  import("./components/property-details/ImageGallery")
);
const Footer = lazy(() => import("./components/footer/Footer"));
const UpcomingProjects = lazy(() =>
  import("./components/upcoming-projects/UpcomingProjects")
);
const AllProjectsList = lazy(() =>
  import("./components/all-projects-list/AllProjectsList")
);

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={[
              <Navbar key={1} />,
              <Homepage key={2} />,
              <Footer key={3} />,
            ]}
          />
          <Route
            path="/new-launch-projects.php"
            element={[
              <Navbar key={4} />,
              <NewLaunchProjects key={5} />,
              <Footer key={6} />,
            ]}
          />
          <Route
            path="/best-deals"
            element={[
              <Navbar key={7} />,
              <BestProjects key={8} />,
              <Footer key={9} />,
            ]}
          />
          <Route
            path="/contact"
            element={[
              <Navbar key={10} />,
              <Contact key={11} />,
              <Footer key={12} />,
            ]}
          />
          <Route
            path="/property-details"
            element={[
              <Navbar key={13} />,
              <PropertyDetails key={14} />,
              <Footer key={15} />,
            ]}
          />
          <Route
            path="/property-details/image-gallery"
            element={<ImageGallery />}
          />
          <Route
            path="/upcoming-projects.html"
            element={[
              <Navbar key={16} />,
              <UpcomingProjects key={17} />,
              <Footer key={18} />,
            ]}
          />
          <Route
            path="/dwarka-expressway-projects-list.php"
            element={[
              <Navbar key={19} />,
              <AllProjectsList key={20} />,
              <Footer key={21} />,
            ]}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

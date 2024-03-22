import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Suspense, lazy } from "react";
import ShimmerCard from "./components/card/ShimmerCard";
const ScoPlotsGurgaon = lazy(() =>
  import("./components/sco-plots/ScoPlotsGurgaon")
);
const Homepage = lazy(() => import("./components/homepage/Homepage"));
const PropertyDetails = lazy(() =>
  import("./components/property-details/PropertyDetails")
);

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
const AllProjectsList = lazy(() =>
  import("./components/all-projects-list/AllProjectsList")
);

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={[
            <Navbar key={1} />,
            <Suspense fallback={<h2>Loading...</h2>}>
              <Homepage key={2} />
            </Suspense>,
            <Footer key={3} />,
          ]}
        />
        <Route
          path="/new-launch-projects.php"
          element={[
            <Navbar key={4} />,
            <Suspense key={5} fallback={<ShimmerCard cards={8} mt={"100px"} />}>
              <NewLaunchProjects />
            </Suspense>,
            <Footer key={6} />,
          ]}
        />
        <Route
          path="/best-deals"
          element={[
            <Navbar key={7} />,
            <Suspense key={8} fallback={<ShimmerCard cards={8} mt={"100px"} />}>
              <BestProjects />
            </Suspense>,
            <Footer key={9} />,
          ]}
        />
        <Route
          path="/contact"
          element={[
            <Navbar key={10} />,
            <Suspense key={11} fallback={<h2>Loading...</h2>}>
              <Contact />
            </Suspense>,
            <Footer key={12} />,
          ]}
        />
        <Route
          path="/property-details"
          element={[
            <Navbar key={13} />,
            <Suspense key={14} fallback={<h2>Loading...</h2>}>
              <PropertyDetails />
            </Suspense>,
            <Footer key={15} />,
          ]}
        />
        <Route
          path="/property-details/image-gallery"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ImageGallery />
            </Suspense>
          }
        />
        <Route
          path="/sco-plots-gurgaon"
          element={[
            <Navbar key={16} />,
            <Suspense key={17} fallback={<ShimmerCard cards={8} />}>
              <ScoPlotsGurgaon />
            </Suspense>,
            <Footer key={18} />,
          ]}
        />
        <Route
          path="/dwarka-expressway-projects-list.php"
          element={[
            <Navbar key={19} />,
            <Suspense key={20} fallback={<h2>Loading...</h2>}>
              <AllProjectsList />
            </Suspense>,
            <Footer key={21} />,
          ]}
        />
      </Routes>
    </>
  );
}

export default App;

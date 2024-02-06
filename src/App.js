import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={[<Navbar key={1} />, <Homepage key={2} />]} />
      </Routes>
    </>
  );
}

export default App;

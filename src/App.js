import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import DetailPhone from "./components/detail-phone/DetailPhone";
import { Favorite } from "./components/favorites/Favorite";

const Routing = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Navbar />
            <Layout />
          </>
        }
      />
      <Route
        path="/phone/:slug"
        element={
          <>
            <DetailPhone />
          </>
        }
      />
      <Route path="/favorites" element={<Favorite />} />
    </Routes>
  );
};
function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;

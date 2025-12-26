import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";
import Achievements from "./pages/achievements";
import Socials from "./pages/socials";
import NoPage from "./pages/nopage";
import Gallery from "./pages/gallery";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NoPage />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;

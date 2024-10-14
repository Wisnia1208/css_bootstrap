import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Css1 from "./pages/Css1";
import Css2 from "./pages/Css2";
import Bootstrap1 from "./pages/Bootstrap1";
import Bootstrap2 from "./pages/Bootstrap2";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Navbar />
          <div className="mt-3">
            <Routes>
              <Route path="/css1" element={<Css1 />} />
              <Route path="/css2" element={<Css2 />} />
              <Route path="/bootstrap1" element={<Bootstrap1 />} />
              <Route path="/bootstrap2" element={<Bootstrap2 />} />
            </Routes>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;

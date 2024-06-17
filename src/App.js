import Home from "./Home";
import Clat from "./Clat";
import Classroom_coaching from "./Classroom_coaching";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ailet from "./Ailet";
import Online_coaching from "./Online_coaching";




function App() {
  return (
    < >
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clat/" element={<Clat />} />
            <Route path="/ailet/" element={<Ailet />} />
            <Route path="/classroom-coaching/" element={<Classroom_coaching />} />
            <Route path="/online-coaching/" element={<Online_coaching />} />
           
          </Routes>
        </Router>
      </div>


  
    </>
  );
}

export default App;

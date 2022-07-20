import Index  from "pages/Index";
import Rhodesian from "pages/Rhodesian";
import BulldogIngles from "pages/BulldogIngles"

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={< Index />} />
            <Route path="/rhodesian" element={< Rhodesian />} />
            <Route path="/bulldogIngles" element={< BulldogIngles />} />
        </Routes>               
      </BrowserRouter>         
    </div>
  );
}


export default App;



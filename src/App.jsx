import Index  from "pages/Index";
import Rhodesian from "pages/Rhodesian";
import BulldogIngles from "pages/BulldogIngles";
import LayoutPrincipal from "layouts/LayoutPrincipal";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rotweiller from "pages/Rotweiller";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutPrincipal>
          <Routes>
            <Route path="/" element={< Index />} />
            <Route path="/rhodesian" element={< Rhodesian />} />
            <Route path="/bulldogIngles" element={< BulldogIngles />} />
            <Route path="/rotweiller" element={< Rotweiller />} />
          </Routes> 
        </LayoutPrincipal>              
      </BrowserRouter>         
    </div>
  );
}


export default App;



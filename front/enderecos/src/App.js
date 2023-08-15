import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";

import "./index.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
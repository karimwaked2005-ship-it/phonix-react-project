import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Devices from "./pages/Devices";
import Pulse from "./pages/pulse";
import System from "./pages/System";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/pulse" element={<Pulse />} />
        <Route path="/system" element={<System />} />
      </Routes>
    </BrowserRouter>
  );
}
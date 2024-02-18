import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catelog from "./pages/Catelog";
import Details from "./pages/Details";

function App() {
  const [count, setCount] = useState<number>();

  return (
    <>
      <NextUIProvider>
        <RootLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catelog/*">
            <Route index={true} element={<Catelog />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Routes>
      </NextUIProvider>
    </>
  );
}

export default App;

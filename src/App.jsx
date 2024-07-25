import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componet/Navbar";
import Textform from "./componet/Textform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar title="Noshahid App" abouttitle="Noshahid App About" />
      <div className="container">
        <Textform heading= "Enter your paragraph for capitals" />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { Header } from "./components/Header";
import { PasswordGenerator } from "./components/PasswordGenerator";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <PasswordGenerator />
    </div>
  );
}

export default App;

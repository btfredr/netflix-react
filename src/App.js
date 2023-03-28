import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Homescreen from "./screens/Homescreen";
import Login from "./screens/Login";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Homescreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

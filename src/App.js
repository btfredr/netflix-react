import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Homescreen from "./screens/Homescreen";
import Login from "./screens/Login";
import { auth } from "./utils/firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
      }
    });

    return unsubscribe;
  }, []);

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

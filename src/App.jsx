import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const handleLogout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar
            username={userData.username}
            onLogout={handleLogout}
            userData={userData}
          />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

import AppRoutes from "./routes";
import { useEffect } from "react";
import { auth } from "./config"; // Firebase config
import { useAuthStore } from "./context/authStore";
import React from "react";

function App() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return <AppRoutes />;
}

export default App;

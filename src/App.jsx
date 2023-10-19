import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LandingPage from "./components/LandingPage";
// import { redirect } from "react-router-dom";

function App() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated && user) {
    location.href = "/dashboard";
  }

  return <LandingPage />;
}

export default App;

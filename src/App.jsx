import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import TodoPage from "./components/TodoPage";
import Navbar from "./components/Navbar";

function App() {
  const { isAuthenticated, user } = useAuth0();

  if(!isAuthenticated && !user ){
    return <LandingPage/>
  }

  return (
    <>
      <Navbar />
      <TodoPage />
    </>
  );
}

export default App;
